// mongoose-crud.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  city: String,
});

// Create a model
const User = mongoose.model('User', userSchema);

async function runCRUD() {
  try {
    // CREATE
    const newUser = new User({ name: 'Alice', age: 28, city: 'Delhi' });
    await newUser.save();
    console.log('Created user:', newUser);

    // READ all users
    const allUsers = await User.find();
    console.log('All users:', allUsers);

    // READ one user
    const oneUser = await User.findOne({ name: 'Alice' });
    console.log('One user:', oneUser);

    // UPDATE
    const updatedUser = await User.findOneAndUpdate(
      { name: 'Alice' },
      { city: 'Mumbai' },
      { new: true } // return updated doc
    );
    console.log('Updated user:', updatedUser);

    // DELETE
    const deletedUser = await User.findOneAndDelete({ name: 'Alice' });
    console.log('Deleted user:', deletedUser);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

runCRUD();
