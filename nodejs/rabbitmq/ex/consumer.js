const amqp = require('amqplib');

async function receiveMessage() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'testQueue';

  await channel.assertQueue(queue);
  console.log('Waiting for messages in', queue);

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log('Received:', msg.content.toString());
      channel.ack(msg);
    }
  });
}

receiveMessage();


// docker run -d --hostname my-rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
