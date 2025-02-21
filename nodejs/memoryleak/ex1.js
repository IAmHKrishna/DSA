const express = require("express");
const app = express();
const PORT = 3011;

let leakArray = []; // 🛑 Memory leak: Unbounded growth

app.get("/", (req, res) => {
  leakArray.push(Buffer.alloc(1000000)); // Adds 1MB every request
  res.send("Memory leak simulated!");
});
setInterval(() => {
    console.log("Memory Usage:", process.memoryUsage());
  }, 5000);
  
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
