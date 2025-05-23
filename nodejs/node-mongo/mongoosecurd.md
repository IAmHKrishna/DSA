Here’s a **complete example** of a **Mongoose schema** with **CRUD operations** using Node.js and Express:

---

## ✅ 1. Setup

Install packages:

```bash
npm install express mongoose
```

---

## ✅ 2. Create Mongoose Schema (`models/User.js`)

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
```

---

## ✅ 3. Express CRUD Routes (`server.js`)

```js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// 👉 Create a User (POST)
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 👉 Read All Users (GET)
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 👉 Read One User by ID (GET)
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// 👉 Update User by ID (PUT)
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// 👉 Delete User by ID (DELETE)
app.delete('/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted' });
});

// Start Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

## 🧪 Example API Usage

* `POST /users` with body `{ "name": "Alice", "email": "alice@example.com", "age": 25 }`
* `GET /users` → list users
* `GET /users/:id` → fetch user by ID
* `PUT /users/:id` → update user
* `DELETE /users/:id` → delete user

---

Let me know if you want authentication added or schema validations using Joi/Zod etc.
