const EventEmitter = require('events');

// Create an emitter object
const eventEmitter = new EventEmitter();

// Listen to an event
eventEmitter.on('greet', (arg1) => {
  console.log('Hello! Event received.', arg1);
});

// Emit the event
eventEmitter.emit('greet', 'John');
