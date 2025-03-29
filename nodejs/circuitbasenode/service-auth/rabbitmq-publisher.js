const amqp = require('amqplib');

async function publishMessage(queue, message) {
    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message sent: ${message}`);
    await channel.close();
    await connection.close();
}

module.exports = { publishMessage };
