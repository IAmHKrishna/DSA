const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const writeStream = fs.createWriteStream(filePath);

console.log("Generating large file...");

for (let i = 0; i < 1e2; i++) { // Writing more then 1 million lines
  writeStream.write(`This is line number ipsum ${i}\n`);
}

writeStream.end(() => {
  console.log("Large file generated successfully!");
});

console.log("Writing large file to disk...");

writeStream.on("finish", () => {
  console.log("Large file written to disk successfully!");
});

writeStream.on("error", (err) => {
  console.error("Error writing large file:", err);
});

writeStream.on("close", () => {
  console.log("Large file write stream closed.");
});

