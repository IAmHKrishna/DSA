class MyEventEmitter {
    constructor() {
      this.events = {};  // Store all events
    }
  
    // Register a normal event listener
    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
    }
  
    // Register a one-time event listener
    once(eventName, listener) {
      const wrapper = (...args) => {
        listener(...args);           // Call the original listener
        this.off(eventName, wrapper); // Remove after calling once
      };
      this.on(eventName, wrapper);    // Attach the wrapper
    }
  
    // Emit (trigger) an event
    emit(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(listener => {
          listener(...args);
        });
      }
    }
  
    // Remove a listener
    off(eventName, listenerToRemove) {
      if (!this.events[eventName]) return;
      this.events[eventName] = this.events[eventName].filter(
        listener => listener !== listenerToRemove
      );
    }
  }
  

  const myEmitter = new MyEventEmitter();

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

// Using once
myEmitter.once('greet', sayHello);

// Emitting 'greet' event multiple times
myEmitter.emit('greet', 'Alice');  // Output: Hello, Alice!
myEmitter.emit('greet', 'Bob');    // No output! (because it's once)

// Using on
myEmitter.on('greet', sayHello);

// Emitting 'greet' event multiple times
myEmitter.emit('greet', 'Alice');  // Output: Hello, Alice!
myEmitter.emit('greet', 'Bob');    // Output: Hello, Bob!   