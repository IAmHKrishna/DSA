const { io } = require("socket.io-client");

// Connect to /chat namespace
const socket = io("http://localhost:3000/chat");

socket.on("connect", () => {
  console.log("✅ Connected to /chat with ID:", socket.id);

  // Join room1
  socket.emit('joinRoom', 'room1');

  // Send a message to room1 after joining
  setTimeout(() => {
    socket.emit('chat message', {
      room: 'room1',
      message: 'Hello room1 from ' + socket.id
    });
  }, 1000);
});

// Listen to messages from room
socket.on('chat message', (msg) => {
  console.log("📨 Message:", msg);
});

socket.on('message', (msg) => {
  console.log("🔔 Notification:", msg);
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from /chat");
});