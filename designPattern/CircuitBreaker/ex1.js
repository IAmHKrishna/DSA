const axios = require('axios');
const CircuitBreaker = require('opossum');

async function callService() {
    // throw new Error('Service Unavailable');
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
}

// Create a circuit breaker
const breaker = new CircuitBreaker(callService, {
  timeout: 3000,          // If function takes longer, trigger failure
  errorThresholdPercentage: 50, // % of failures before opening the circuit
  resetTimeout: 5000      // Time before trying again after circuit opens
});

// Handle events
breaker.fallback(() => ({ message: 'Service is temporarily unavailable.' }));
breaker.on('open', () => console.log('Circuit is OPEN'));
breaker.on('halfOpen', () => console.log('Circuit is HALF-OPEN'));
breaker.on('close', () => console.log('Circuit is CLOSED'));

(async () => {
  try {
    const result = await breaker.fire();
    console.log(result,`result`);
  } catch (err) {
    console.error('Breaker error:', err.message);
  }
})();
