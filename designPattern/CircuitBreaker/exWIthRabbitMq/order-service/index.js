const express = require('express');
const amqp = require('amqplib');
const CircuitBreaker = require('opossum');

const app = express();
const PORT = 5002;

let channel;

async function connectRabbitMQ() {
    const conn = await amqp.connect('amqp://localhost');
    channel = await conn.createChannel();
    await channel.assertQueue('paymentQueue');

    channel.consume('paymentQueue', async (msg) => {
        console.log("paymentQueue",msg)
        if (msg !== null) {
            try {
                const order = JSON.parse(msg.content.toString());
                console.log('Received order:', order);
    
                // Simulate failure
                if (order.amount > 3000) {
                    throw new Error('Payment failed');
                }
    
                // Acknowledge message
                channel.ack(msg);
                console.log('✅ Payment processed');
            } catch (err) {
                console.error('❌ Error processing payment:', err.message);
                // Nack and discard the message (do not requeue)
                channel.nack(msg, false, false);
            }
        }
    });
}

const sendToPaymentService = async () => {
    const order = { id: Date.now(), amount: Math.floor(Math.random() * 5000) };
    //  // Simulate failure 50% of the time
    //  if (Math.random() < 0.5) {
    //     throw new Error('Simulated Payment Queue failure');
    // }
    channel.sendToQueue('paymentQueue', Buffer.from(JSON.stringify(order)));
    return { message: 'Order sent to payment service', order };
};




const breaker = new CircuitBreaker(sendToPaymentService, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
});

breaker.fallback(() => ({ message: 'Payment service unavailable. Try later.' }));

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
    console.log(`Order service running on ${PORT}`);
});
