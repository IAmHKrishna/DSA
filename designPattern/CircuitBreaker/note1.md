A **Circuit Breaker** is a design pattern used to detect failures and prevent an application from trying to perform operations that are likely to fail — helping to avoid cascading failures in microservices.

---

### ✅ Use Case in Node.js

You're calling a remote service (e.g., an API or DB), and you want to:

* Automatically fail fast if the service is down.
* Retry only after a cooldown period.
* Prevent spamming a failing service.

---

### ✅ Node.js Circuit Breaker with `opossum`

#### 1. **Install opossum**

```bash
npm install opossum
```

---

#### 2. **Basic Example**

```js
const axios = require('axios');
const CircuitBreaker = require('opossum');

async function callService() {
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
    console.log(result);
  } catch (err) {
    console.error('Breaker error:', err.message);
  }
})();
```

---

### 🔁 Circuit States

* **Closed**: Everything works.
* **Open**: All calls fail immediately for a time.
* **Half-Open**: Tries a few calls to check if the system has recovered.

---

### 🧪 Simulate Failure

To test:

* Replace `axios.get(...)` with a URL that doesn’t exist (e.g., `http://localhost:9999`).
* Watch the circuit open after repeated failures.

---

Would you like a **RabbitMQ example with a circuit breaker**, or want to implement this inside an Express.js API or microservice?
