const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
client.connect();

// const db = client.db("mydb");
// const collection = db.collection("mycollection");

async function streamLogs() {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  
    const db = client.db("mydb");
    const logsCollection = db.collection("logs");
  
    // Tailable Cursor: Continuously listens for new logs
    const cursor = logsCollection.find({}, { tailable: true, awaitData: true });
  
    cursor.forEach(doc => {
      console.log("📌 New Log:", doc);
    });
  }
  
  streamLogs();
  

  // db.createCollection("api_logs", { capped: true, size: 1048576, max: 1000 })

//   db.logs.find().sort({ $natural: 1 })  // Oldest to newest
// db.logs.find().sort({ $natural: -1 }) // Newest to oldest
