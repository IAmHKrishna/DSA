const EventEmitter = require('events');

// Create emitter
const eventEmitter = new EventEmitter();

// Normal listener (multiple times)
const greet = () => {
  console.log('Hello! Greeting again.');
};

// Listen normally
eventEmitter.on('greet', greet);

// Listen only once
eventEmitter.once('bye', () => {
  console.log('Goodbye! This will only happen once.');
});

// Emit 'greet' multiple times
eventEmitter.emit('greet');  // ➔ Hello! Greeting again.
eventEmitter.emit('greet');  // ➔ Hello! Greeting again.

// Emit 'bye' event
eventEmitter.emit('bye');    // ➔ Goodbye! This will only happen once.
eventEmitter.emit('bye');    // ➔ (No output, because 'once' listener is removed)

// Now, remove 'greet' listener manually
eventEmitter.removeListener('greet', greet);

// Try emitting again
eventEmitter.emit('greet');  // ➔ (No output, because listener was removed)
