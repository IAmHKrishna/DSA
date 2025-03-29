const io = require('socket.io');

// const io = socketIo('http://localhost:3022');
const socket = io('http://localhost:3022');

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});