const { parentPort } = require("worker_threads");

function heavyComputation(n) {
  if (n <= 1) return n;
  return heavyComputation(n - 1) + heavyComputation(n - 2);
}

parentPort.on("message", (task) => {
  const result = heavyComputation(task);
  parentPort.postMessage(result);
});
