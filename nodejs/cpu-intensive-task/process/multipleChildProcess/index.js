// Even with a child process, only one task is handled at a time, leading to delays for multiple requests.
// Solution: Using a Pool of Child Processes

const express = require("express");
const { fork } = require("child_process");
const app = express();

// Number of worker processes (Adjust based on CPU cores)
const NUM_WORKERS = 4;
const workers = [];

for (let i = 0; i < NUM_WORKERS; i++) {
  workers.push(fork("./compute.js")); // Create child processes
}

// Round-robin worker assignment
let currentWorker = 0;

app.get("/", (req, res) => {
  const worker = workers[currentWorker]; // Get next available worker
  currentWorker = (currentWorker + 1) % NUM_WORKERS; // Rotate worker

  worker.once("message", (result) => {
    res.send(`Result: ${result}`);
  });

  worker.send("start"); // Send task to worker
});

app.listen(3000, () => console.log("Server running on port 3000"));
