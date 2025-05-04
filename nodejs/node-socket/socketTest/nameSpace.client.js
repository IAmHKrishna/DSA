const { io } = require("socket.io-client");

// Connect to the /chat namespace
const socket = io("http://localhost:3001/chat");

socket.on("connect", () => {
  console.log("Connected to /chat namespace with ID:", socket.id);

  // Send a message to the /chat namespace
  socket.emit("chat message", "Hello from namespace client!");
});

// Listen for messages
socket.on("chat message", (msg) => {
  console.log("Received message in /chat:", msg);
});

socket.on("disconnect", () => {
  console.log("Disconnected from /chat namespace");
});

socket.on("error", (err) => {
  console.log(err);
});