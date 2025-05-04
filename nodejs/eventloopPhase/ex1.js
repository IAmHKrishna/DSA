const fs = require('fs');

setTimeout(() => {
  console.log('⏱️ setTimeout (Timers Phase)');
}, 0);

setImmediate(() => {
  console.log('📦 setImmediate (Check Phase)');
});

fs.readFile(__filename, () => {
  console.log('📄 fs.readFile callback (Poll Phase)');

  setTimeout(() => {
    console.log('⏱️ Inside fs.readFile > setTimeout (Timers Phase)');
  }, 0);

  setImmediate(() => {
    console.log('📦 Inside fs.readFile > setImmediate (Check Phase)');
  });

  process.nextTick(() => {
    console.log('🌀 Inside fs.readFile > process.nextTick (Microtask)');
  });

  Promise.resolve().then(() => {
    console.log('🔮 Inside fs.readFile > Promise.then (Microtask)');
  });
});

process.nextTick(() => {
  console.log('🌀 process.nextTick (Microtask)');
});

Promise.resolve().then(() => {
  console.log('🔮 Promise.then (Microtask)');
});

console.log('📝 Synchronous log (Runs first)');
