const express = require('express');
const axios = require('axios');
const CircuitBreaker = require('opossum');
const app = express();
const PORT = 4000;

// Retry logic (optional)
const axiosRetry = require('axios-retry');
axiosRetry(axios, { retries: 2, retryDelay: () => 1000 });

// Service call
const unstableService = () => axios.get('http://localhost:3000/unstable-service');

// Circuit breaker config
const options = {
    timeout: 5000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
};

const breaker = new CircuitBreaker(unstableService, options);

// Fallback
breaker.fallback(() => ({ data: '⚠️ Fallback: Service temporarily unavailable' }));

// Logging
breaker.on('open', () => console.warn('🟥 Circuit Opened'));
breaker.on('halfOpen', () => console.info('🟨 Circuit Half-Open'));
breaker.on('close', () => console.log('🟩 Circuit Closed'));
breaker.on('fallback', () => console.warn('↪️ Fallback triggered'));

// Route using circuit breaker
app.get('/test', async (req, res) => {
    try {
        const result = await breaker.fire();
        res.send(result.data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`Main service on port ${PORT}`));
