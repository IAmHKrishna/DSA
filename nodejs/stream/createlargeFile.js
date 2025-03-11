const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const writeStream = fs.createWriteStream(filePath);

console.log("Generating large file...");

for (let i = 0; i < 1e7; i++) { // Writing more then 1 million lines
  writeStream.write(`This is line number ipsum ${i}\n`);
}

writeStream.end(() => {
  console.log("Large file generated successfully!");
});
