const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers (one per CPU core)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it crashes
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

  // Graceful shutdown for master
  process.on("SIGTERM", () => {
    console.log("Master received SIGTERM. Shutting down workers...");
    for (const id in cluster.workers) {
      cluster.workers[id].kill(); // Send kill signal to workers
    }
    process.exit();
  });
} else {
  // Worker process
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
  });

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });

  // Graceful shutdown for worker
  process.on("SIGTERM", () => {
    console.log(`Worker ${process.pid} shutting down gracefully...`);
    server.close(() => {
      console.log(`Worker ${process.pid} closed connections.`);
      process.exit();
    });
  });
}
