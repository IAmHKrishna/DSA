// IPC Using Redis Pub/Sub
// For distributed IPC, you can use Redis Pub/Sub. This is useful for multi-server communication.

// 👨‍🏫 Example: IPC with Redis
// First, install Redis and redis npm package:

const http = require('http');
const redis = require('redis');

const publisher = redis.createClient();


publisher.on('connect', () => {
    console.log('Connected to Redis');
    publisher.publish('my-channel', 'Hello from publisher');
})


// setInterval(() => {
//     const message = `Hello ${new Date().toISOString()}`;
//     publisher.publish('channel1', message);
//   }, 2000);


// publisher.on('error', (error) => {
//     console.error('Publisher error:', error);
// });

// publisher.on('end', () => {
//     console.log('Publisher connection closed');
// });

http
.createServer((req,res)=>{
    res.writeHead(200)
    res.end(`Handled by worker ${process.pid}\n`);
})
.listen(3001)

// Explanation:

// The publisher sends messages to a Redis channel.
// The subscriber listens to the Redis channel and receives the messages.