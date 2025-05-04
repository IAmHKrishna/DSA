const express = require('express');
const axios = require('axios');
const CircuitBreaker = require('opossum');

const app = express();
const PORT = 4000;

// Simulated API route
app.get('/unstable-service', async (req, res) => {
    try {
        // Simulate random failures
        if (Math.random() > 0.5) {
            throw new Error('Random failure');
        }
        res.send('Service is working');
    } catch (error) {
        console.log(error)
        res.status(500).send('Service failed');
    }
});

// Circuit breaker options
const options = {
    timeout: 3000,                 // Time before failing request
    errorThresholdPercentage: 50,  // Fail when 50% of requests fail
    resetTimeout: 10000            // Wait 10 seconds before retrying
};

// Wrap the service call with circuit breaker
const unstableService = () => axios.get('http://localhost:3000/unstable-service');

const breaker = new CircuitBreaker(unstableService, options);

// Fallback function when circuit is open
breaker.fallback(() => 'Fallback: Service temporarily unavailable');

// Route to trigger circuit breaker
app.get('/test', async (req, res) => {
    try {
        const result = await breaker.fire();
        res.send(result.data || result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Circuit breaker event listeners
breaker.on('open', () => console.log('Circuit Opened'));
breaker.on('close', () => console.log('Circuit Closed'));
breaker.on('halfOpen', () => console.log('Circuit Half-Open'));
breaker.on('fallback', () => console.log('Fallback triggered'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
