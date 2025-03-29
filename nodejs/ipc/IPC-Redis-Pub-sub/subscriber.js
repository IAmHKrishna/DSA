const http = require('http');

const redis = require('redis');
const subscriber = redis.createClient();

subscriber.on('connect', () => {
    console.log('Subscriber Connected to Redis');
    client.subscribe('my-channel');
})

// subscriber.subscribe('channel1');

subscriber.on('message', (channel, message) => {
    console.log(`Received message on channel ${channel}: ${message}`);
});

subscriber.on('error', (error) => {
    console.error('Subscriber error:', error);
});

subscriber.on('end', () => {
    console.log('Subscriber connection closed');
});

subscriber.on('disconnect', () => {
    console.log('Subscriber connection disconnected');
});

subscriber.on('reconnecting', () => {
    console.log('Subscriber is reconnecting');
});

subscriber.on('reconnect', () => {
    console.log('Subscriber has reconnected');
});

subscriber.on('close', () => {
    console.log('Subscriber connection closed');
});


http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from server');
}).listen(3002, () => console.log('Server running on port 3002'));


