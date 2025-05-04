const fs = require('fs');

console.log('🔵 Start');

setTimeout(() => {
  console.log('🟡 Timeout callback (Timers Phase)');
}, 0);

fs.readFile(__filename, () => {
  console.log('🟢 I/O Callback (Poll Phase)');
});

setImmediate(() => {
  console.log('🟣 setImmediate callback (Check Phase)');
});

Promise.resolve().then(() => {
  console.log('🟠 Promise.then (Microtask)');
});

process.nextTick(() => {
  console.log('🔴 process.nextTick (Microtask)');
});

console.log('🔵 End');
