const express = require("express");
const { Worker, isMainThread, parentPort } = require("worker_threads");
const WorkerPool = require("./workerPool");

const app = express();
const pool = new WorkerPool(4, "./worker.js"); // Pool of 4 workers

app.get("/compute/:number", (req, res) => {
  const number = parseInt(req.params.number);

  pool.runTask(number, (result) => {
    res.send(`Fibonacci(${number}) = ${result}`);
  });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

app.listen(3000, () => console.log("Server running on port 3000"));
