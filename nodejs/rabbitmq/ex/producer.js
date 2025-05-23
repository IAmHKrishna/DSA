const amqp = require('amqplib');

async function sendMessage() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'testQueue';
  const msg = 'Hello from Producer!';

  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(msg));
  console.log('Sent:', msg);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendMessage();
