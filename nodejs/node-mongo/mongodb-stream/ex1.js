const {MongoClient} = require('mongodb');

// const client = new MongoClient("mongodb://localhost:27017");
const client = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0");

async function watchChanges() {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("mydb");
    const collection = db.collection("users");

    // Watch for changes in the collection
    const changeStream = collection.watch();

//  listens for changes
    changeStream.on("change", change => {
        console.log("📌 Change:", change);
    });
    console.log("📌 Watching for changes...");
}

watchChanges().catch(console.error);