// IPC with Cluster Module
// When using the cluster module, Node.js creates multiple processes (workers) that can communicate with each other using IPC.

// 👨‍🏫 Example: Master-Worker Communication

const cluster = require("cluster")
const e = require("express")
const http = require('http')
const os = require("os")
// require("../ipc-child-process/child.js")
const numCPUs = os.cpus()
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("cluster: " ,cluster);
// console.log(numCPUs.length)

if(cluster.isMaster){
    // console.log(`Master ${process.pid} is running`)
    for(let i=0;i<numCPUs.length;i++){
        const worker = cluster.fork();
        // console.log(`Worker ${worker.process.pid} started`)
        // Send message to worker
        worker.send(`Worker ${worker.process.pid} started`)

        worker.on("message", (msg) => {
            console.log(`Message from worker ${worker.id}:`, msg);
        });
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    })
}else{
    // console.log(`Worker ${process.pid} started`)
    // Receive message from master
    process.on("message", (msg) => {
        console.log(`Message from master:`, msg);
    });

    // Send reply to master
    process.send(`Reply from worker ${process.pid}`);

    http
    .createServer((req,res)=>{
        res.writeHead(200)
        res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(3001)
}

// Explanation:

// The master process forks multiple workers.
// Master sends messages to workers and receives responses.
// Each worker listens for messages and sends responses back to the master.
