// 2. Abstraction Abstraction is the process of hiding the implementation details and only exposing the essential features of an object. The focus is on what an object can do rather than how it does it. In JavaScript, abstraction can be achieved by providing an interface (e.g., public methods) while keeping the complexity hidden from the user.

// Example:

class Car {
  constructor() {
    this.engineStarted = false;
  }

  // Abstracted behavior
  start() {
    this.#startEngine();
    console.log('Car is starting...');
  }

  // Private method (implementation hidden from outside)
  #startEngine() {
    this.engineStarted = true;
    console.log('Engine started.');
  }
}

const myCar = new Car();
myCar.start(); // Abstracted method, user doesn't need to know the internal details