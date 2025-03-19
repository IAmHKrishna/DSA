const { Worker } = require("worker_threads");

class WorkerPool {
  constructor(size, workerPath) {
    this.workers = [];
    this.queue = [];
    this.currentWorker = 0;

    for (let i = 0; i < size; i++) {
      const worker = new Worker(workerPath);
      worker.on("message", (result) => {
        const callback = worker.callback;
        if (callback) callback(result);
        worker.callback = null;
        this.assignNextTask(worker);
      });
      this.workers.push(worker);
    }
  }

  assignNextTask(worker) {
    if (this.queue.length > 0) {
      const { task, callback } = this.queue.shift();
      worker.callback = callback;
      worker.postMessage(task);
    }
  }

  runTask(task, callback) {
    const worker = this.workers[this.currentWorker];
    this.currentWorker = (this.currentWorker + 1) % this.workers.length;
console.log(`worker ${this.currentWorker} is assigned to task ${task}`)
    if (!worker.callback) {
      worker.callback = callback;
      worker.postMessage(task);
    } else {
      this.queue.push({ task, callback });
    }
  }
}

module.exports = WorkerPool;
