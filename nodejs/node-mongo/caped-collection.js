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
  