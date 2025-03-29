const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

// Socket server setup
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",   // React app URL
        methods: ["GET", "POST"]
    }
});

// Handle socket connection
io.on("connection", (socket) => {
    console.log(`⚡️ New client connected: ${socket.id}`);
    socket.broadcast.emit('hi1111');
    // Listen for client messages
    socket.on("sendMessage", (message) => {
        console.log(`Message from client: ${message}`);
        
        // Broadcast message to all clients
        io.emit("receiveMessage", message);
    });

    socket.emit("receiveMessage",'hi');

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log(`❌ Client disconnected: ${socket.id}`);
    });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
