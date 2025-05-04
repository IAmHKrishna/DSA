
const express = require('express');
const amqp = require('amqplib');
const CircuitBreaker = require('opossum');

const app = express();
const PORT = 5002;

let channel;

async function connectRabbitMQ() {
    const conn = await amqp.connect('amqp://localhost');
    channel = await conn.createChannel();
    await channel.assertExchange('dlx', 'direct', { durable: true });
    // Setup dead-letter queue
    await channel.assertQueue('paymentQueue', {
        durable: true,
        arguments: {
            'x-dead-letter-exchange': 'dlx',
            'x-dead-letter-routing-key': 'payment.failed'
        }
    });
    await channel.bindQueue('deadLetterQueue', 'dlx', 'payment.failed');
    await channel.assertQueue('paymentQueue', {
        deadLetterExchange: '',
        deadLetterRoutingKey: 'deadLetterQueue'
    });

    // Consumer
    channel.consume('paymentQueue', async (msg) => {
        if (msg !== null) {
            try {
                const order = JSON.parse(msg.content.toString());
                console.log('📥 Received order:', order);

                if (order.amount > 3000) {
                    throw new Error('💸 Payment failed due to amount limit');
                }

                channel.ack(msg);
                console.log('✅ Payment processed');
            } catch (err) {
                console.error('❌ Error:', err.message);
                channel.nack(msg, false, false);
            }
        }
    });

    // Dead letter consumer
    channel.consume('deadLetterQueue', (msg) => {
        if (msg) {
            console.log('⚠️ Dead letter received:', msg.content.toString());
            channel.ack(msg);
        }
    });
}

const sendToPaymentService = async () => {
    const order = { id: Date.now(), amount: Math.floor(Math.random() * 5000) };
    channel.sendToQueue('paymentQueue', Buffer.from(JSON.stringify(order)));
    return { message: 'Order sent to payment service', order };
};

const breaker = new CircuitBreaker(sendToPaymentService, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
});

breaker.fallback(() => ({ message: '🛑 Payment service unavailable. Try later.' }));

breaker.on('open', () => console.log('🚫 Circuit Open'));
breaker.on('close', () => console.log('✅ Circuit Closed'));

app.get('/order', async (req, res) => {
    try {
        const result = await breaker.fire();
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, async () => {
    await connectRabbitMQ();
    console.log(`🚀 Order service running on http://localhost:${PORT}`);
});