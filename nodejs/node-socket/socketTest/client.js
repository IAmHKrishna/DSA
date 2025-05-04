const { io } = require("socket.io-client");

// Connect to the Socket.IO server
const socket = io("http://localhost:3001");

// When connected
socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);

  // Send a message to the server
  socket.emit("chat message", "Hello from Node.js client!");
});

// Listen for messages from the server
socket.on("chat message", (msg) => {
  console.log("Received message from server:", msg);
});

// When disconnected
socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
