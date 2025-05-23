// mongo-crud.js
const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('testdb');
    const users = db.collection('users');

    // CREATE
    const insertResult = await users.insertOne({
      name: 'Alice',
      age: 28,
      city: 'Delhi'
    });
    console.log('Inserted:', insertResult.insertedId);

    // READ
    const allUsers = await users.find().toArray();
    console.log('All Users:', allUsers);

    const user = await users.findOne({ name: 'Alice' });
    console.log('Single User:', user);

    // UPDATE
    const updateResult = await users.updateOne(
      { name: 'Alice' },
      { $set: { city: 'Mumbai' } }
    );
    console.log('Updated Count:', updateResult.modifiedCount);

    // DELETE
    const deleteResult = await users.deleteOne({ name: 'Alice' });
    console.log('Deleted Count:', deleteResult.deletedCount);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
