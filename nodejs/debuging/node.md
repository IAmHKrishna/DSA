Detect Event Loop Blocking (CPU-Heavy Tasks)

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "large-file.txt"), "utf8", (err, data) => {
    console.log(data);
});

=>Debugging with blocked-at
const blocked = require("blocked-at");

blocked((time, stack) => {
  console.log(`Event loop blocked for ${time}ms`);
  console.log(stack);
});


===============================================

2. Detect Slow Asynchronous Operations (I/O Lag)

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "large-file.txt"), "utf8", (err, data) => {
    console.log(data);
});

Debugging with perf_hooks

const perf = require("perf_hooks");

const start = perf.performance.now();
fs.readFile(path.join(__dirname, "large-file.txt"), "utf8", (err, data) => {
    const end = perf.performance.now();
    console.log(`Operation took ${end - start} ms`);    
})
