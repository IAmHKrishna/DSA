const amqp = require('amqplib');

async function start() {
    const conn = await amqp.connect('amqp://localhost');
    const channel = await conn.createChannel();
    await channel.assertQueue('paymentQueue');

    console.log('Waiting for messages in paymentQueue...');

    channel.consume('paymentQueue', async msg => {
        const order = JSON.parse(msg.content.toString());

        // Simulate failure
        if (Math.random() > 0.6) {
            console.log(`❌ Payment failed for Order #${order.id}`);
            return channel.nack(msg, false, false); // reject
        }

        console.log(`✅ Payment processed for Order #${order.id} | Amount: ${order.amount}`);
        channel.ack(msg);
    });
}

start();
