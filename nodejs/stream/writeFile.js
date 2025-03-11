const fs = require('fs');

//  write file
// const writeFile = fs.createWriteStream('log.txt');
// process.stdin.pipe(writeFile);

// read file
const readFile = fs.createReadStream('log.txt');
readFile.pipe(process.stdout);