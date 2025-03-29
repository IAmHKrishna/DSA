// node + socket io example

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
console.log('socketIo:', socketIo);
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3022, () => {
    console.log('Server listening on port 3000');
});


// client side

