const mongoose = require('mongoose');

const mongoURI = `mongodb://mongo1:27017,mongo2:27018,mongo3:27019/mydb?replicaSet=rs0`;

const connectWithRetry = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        replicaSet: 'rs0',
        serverSelectionTimeoutMS: 5000,
      });

      console.log('✅ Connected to MongoDB Replica Set');
      return;
    } catch (error) {
      console.error(`Failed to connect: ${error.message}`);
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error('❌ Could not connect to MongoDB after multiple attempts');
};

connectWithRetry();
