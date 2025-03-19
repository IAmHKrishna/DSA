const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length; // Get number of CPU cores
console.log(numCPUs, "numCPUs");
if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers (one for each CPU core)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it crashes
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker process: Run the server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
