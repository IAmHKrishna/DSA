const express = require('express');
const mongoose = require('mongoose');
const CircuitBreaker = require('./circuit-breaker');
const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/authDB', { useNewUrlParser: true });

app.use(express.json());

const breaker = new CircuitBreaker(async () => {
    return { message: 'User authenticated' };
});

app.get('/users', async (req, res) => {
    try {
        const result = await breaker.fire();
        res.send(result);
    } catch (error) {
        res.status(500).send('Service Unavailable');
    }
});

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
