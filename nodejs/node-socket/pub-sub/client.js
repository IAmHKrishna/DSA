const { io } = require("socket.io-client");

// Connect to default namespace
const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("✅ Connected with ID:", socket.id);

  // Subscribe to "news" topic
  socket.emit("subscribe", "news");

  // Publish to "news" after 2 seconds
  setTimeout(() => {
    socket.emit("publish", {
      topic: "news",
      message: "🚨 Breaking News from " + socket.id
    });
  }, 2000);
});

// Listen to messages from subscribed topics
socket.on("message", ({ topic, message }) => {
  console.log(`📬 [${topic}] ${message}`);
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected");
});