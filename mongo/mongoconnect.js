const mongoose = require('mongoose');

const mongoURI = `mongodb://mongo1:27017,mongo2:27018,mongo3:27019/mydb?replicaSet=rs0`;
// const mongoURI = `mongodb://host.docker.internal:27017,host.docker.internal:27018,host.docker.internal:27019/mydb?replicaSet=rs0`;
// const mongoURI = `mongodb://mongo2:27017/?replicaSet=rs0`;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      replicaSet: 'rs0',
      serverSelectionTimeoutMS: 5000,
    });

    console.log('Connected to MongoDB Replica Set');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  }
};

connectDB();
