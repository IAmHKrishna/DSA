const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3010;

// Stream large file to client
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "sample.txt");

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Disposition", "attachment; filename=large-file.txt");

  const readStream = fs.createReadStream(filePath);
  
  readStream.pipe(res); // Streaming file to client
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// Run the server and download the large file by visiting
//  http://localhost:3000/download in your browser. 
// The server streams the large file to the client,
//  which allows the client to download the file without
//  loading the entire file into memory.