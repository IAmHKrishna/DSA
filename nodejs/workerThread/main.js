// main.js
const { Worker } = require('worker_threads');

function runWorker(number) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { number },
    });

    worker.on('message', (msg) => {
      resolve(msg.result);
    });

    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with code ${code}`));
    });
  });
}

console.log('Main thread started');

runWorker(35)
  .then((result) => {
    console.log('Fibonacci result from worker:', result);
  })
  .catch((err) => {
    console.error('Worker error:', err);
  });

console.log('Main thread continues...');
