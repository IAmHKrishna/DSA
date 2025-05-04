const express = require('express');
const axios = require('axios');
const CircuitBreaker = require('opossum');

const app = express();
const PORT = 5000;

// Service call to payment-service
const callPaymentService = () => {
    return axios.get('http://localhost:5001/pay');
};

// Circuit breaker config
const breaker = new CircuitBreaker(callPaymentService, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
});

// Fallback when circuit is open
breaker.fallback(() => ({
    data: '🛑 Payment service unavailable. Please try again later.'
}));

// Events
breaker.on('open', () => console.log('🚫 Circuit Open'));
breaker.on('close', () => console.log('✅ Circuit Closed'));
breaker.on('halfOpen', () => console.log('⚠️ Circuit Half-Open'));
breaker.on('fallback', () => console.log('🔁 Fallback executed'));

// API route
app.get('/order', async (req, res) => {
    try {
        const response = await breaker.fire();
        res.send(`Order Placed - ${response.data}`);
    } catch (error) {
        res.status(500).send(`Order failed: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`Order Service running on ${PORT}`));
