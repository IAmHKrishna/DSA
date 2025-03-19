const { Worker, isMainThread, parentPort } = require("worker_threads");
console.log(isMainThread, "isMainThread",  "step 1");

if (isMainThread) {
  console.log("Main Thread: Creating a worker...");
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("Result from worker:", message));
  worker.on("error", (error) => console.error("Worker error:", error));

  worker.postMessage(1000000000); // Send a number to the worker
} else {
  console.log("Worker: Running...");
  parentPort.on("message", (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    console.log("Worker: Calculated sum:", sum);
    //  throw new Error("Worker error");
    parentPort.postMessage(sum); // Send result back
  });
}

