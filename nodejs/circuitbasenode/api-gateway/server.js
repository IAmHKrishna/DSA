const express = require('express');
const axios = require('axios');
const rateLimit = require('./redis-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(rateLimit);  // Rate Limiting Middleware

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get('http://service-auth:4000/users');
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Service Unavailable' });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('http://service-products:5000/products');
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Service Unavailable' });
    }
});

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
