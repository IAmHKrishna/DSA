// worker.js
const { parentPort, workerData } = require('worker_threads');

function fibonacci(n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData.number);

// Send the result back to the main thread
parentPort.postMessage({ result });

// Close the worker thread
parentPort.close();