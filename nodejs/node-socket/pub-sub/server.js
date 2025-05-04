const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Default namespace
io.on('connection', (socket) => {
  console.log(`📥 Client connected: ${socket.id}`);

  // Subscribe to a topic (room)
  socket.on('subscribe', (topic) => {
    socket.join(topic);
    console.log(`🔔 ${socket.id} subscribed to "${topic}"`);
  });

  // Unsubscribe from a topic
  socket.on('unsubscribe', (topic) => {
    socket.leave(topic);
    console.log(`📤 ${socket.id} unsubscribed from "${topic}"`);
  });

  // Publish to a topic (room)
  socket.on('publish', ({ topic, message }) => {
    console.log(`📣 Publishing to "${topic}": ${message}`);
    io.to(topic).emit('message', { topic, message });
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log('🚀 Server running at http://localhost:3001');
});
