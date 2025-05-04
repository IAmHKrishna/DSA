const http = require("http")
const express = require("express")
const { Server } = require("socket.io")
const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    origin: "http://localhost:3001",
    method: ["*"]
})

// Default namespace (optional)
io.on("connection", (socket) => {
    console.log("client connected", socket.id)
    console.log('Client connected to default namespace');
    socket.on("chat message", (msg) => {
        console.log("Message from Client", msg)
    })
    io.emit("chat message", "hello from server")
    socket.emit("chat message", "hello from server-socket.emit")
    socket.on("error", (err) => {
        console.log(err)
    })
    socket.on("disconnect", () => {
        console.log("client disconnected")
    })

})


// Create a custom namespace
const chatNamespace = io.of('/chat');

chatNamespace.on('connection', (socket) => {
    console.log('User connected to /chat namespace', socket.id);

    socket.on('chat message', (msg) => {
        console.log('[Chat]', msg);
        chatNamespace.emit('chat message', msg); // Broadcast in /chat
    });


    // Join a room
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`🛏️ ${socket.id} joined room ${roomName}`);

        // Notify others in the room
        socket.to(roomName).emit('message', `🔔 ${socket.id} joined ${roomName}`);
    });

    // Leave a room
    socket.on('leaveRoom', (roomName) => {
        socket.leave(roomName);
        console.log(`🚪 ${socket.id} left room ${roomName}`);
        socket.to(roomName).emit('message', `❌ ${socket.id} left ${roomName}`);
    });

    // Send a message to a specific room
    socket.on('chat message', ({ room, message }) => {
        console.log(`💬 [${room}] ${socket.id}: ${message}`);
        chatNamespace.to(room).emit('chat message', `${socket.id}: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});


// Serve a basic index page
app.get('/', (req, res) => {
    res.send('Socket.IO Namespace Server Running');
});
server.listen(3001, () => {
    console.log("server is running on 3001")
})