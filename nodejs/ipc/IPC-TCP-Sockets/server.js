// IPC Using TCP Sockets

// For processes on the same machine or different machines,
//  you can use TCP sockets for communication.

// 👨‍🏫 Example: IPC Using TCP Sockets

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Received data:', data.toString());
        socket.write('Hello from server');
    }); 

    socket.on('end', () => {    
        console.log('Client disconnected');
    });
}); 

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});

// Explanation:

// The server listens on port 4000 for incoming connections.
// The client connects and sends a message.
// Both processes communicate using TCP sockets.