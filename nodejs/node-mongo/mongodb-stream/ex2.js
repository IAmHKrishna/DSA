const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("✅ Connected to MongoDB");

  // Watch for changes in the "users" collection
  const changeStream = db.collection("users").watch();

  changeStream.on("change", (change) => {
    console.log("⚡ Change detected:", change);

    if (change.operationType === "insert") {
      console.log("🆕 New user added:", change.fullDocument);
    }

    if (change.operationType === "update") {
      console.log("🔄 User updated:", change.updateDescription);
    }

    if (change.operationType === "delete") {
      console.log("❌ User deleted:", change.documentKey);
    }
  });
});

db.on("error", (error) => {
  console.error("❌ Error connecting to MongoDB:", error);
});

db.on("close", () => {
  console.log("❌ Connection to MongoDB closed");
});

db.on("reconnect", () => {
  console.log("✅ Reconnected to MongoDB");
});

db.on("reconnectFailed", () => {
  console.error("❌ Reconnection to MongoDB failed");
});

db.on("disconnected", () => {
  console.log("❌ Disconnected from MongoDB");
});

db.on("connecting", () => {
  console.log("🔌 Connecting to MongoDB...");
});


