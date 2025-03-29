const {MongoClient} = require('mongodb');

// const client = new MongoClient("mongodb://localhost:27017");
const client = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0");
client.connect();
async function  transferMoney(fromId, toId, amount) {
    const session = client.startSession();
    try {
        await session.withTransaction(async () => {
         const db = client.db("mydb");
         const accounts = db.collection("accounts");   

        //1  debit from sender account
        await accounts.updateOne(
            {_id:fromId,balance:{$gte:amount}},//ensure sender have enough balance
            {$inc:{balance:-amount}},
            {session}
        )

         //2 credit to receiver account
         await accounts.updateOne(
            {_id:told},
            {$inc:{balance:amount}},
            {session}
        )
        //  log the transaction
        await db.collection("transactions").insertOne(
            {from:fromId,to:toId,timestamp:new Date()},
            {session}
        )
        })

        console.log("✅ Transaction Successful");

    } catch (error) {
        console.error("❌ Transaction Failed:", error);

    }finally {
        session.endSession();
        client.close();
      }
    
}

transferMoney(1, 2, 500);




// -----------------------------------------------------------------------------
// error solution


