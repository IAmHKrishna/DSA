// Define mixin
const canBark = {
  bark() {
    console.log(`${this.name} barks.`);
  }
};

const canRun = {
  run() {
    console.log(`${this.name} is running.`);
  }
};

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Apply mixins
Object.assign(Animal.prototype, canBark, canRun);

// Creating an instance
const dog = new Animal('Buddy');
dog.eat();  // Output: Buddy is eating.
dog.bark(); // Output: Buddy barks.
dog.run();  // Output: Buddy is running.
