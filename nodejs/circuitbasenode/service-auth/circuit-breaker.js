const CircuitBreaker = require('opossum');

const options = {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
};

module.exports = (serviceFunction) => {
    const breaker = new CircuitBreaker(serviceFunction, options);

    breaker.fallback(() => ({ message: 'Fallback: Service is down' }));

    breaker.on('open', () => console.log('Circuit is open'));
    breaker.on('close', () => console.log('Circuit is closed'));

    return breaker;
};

