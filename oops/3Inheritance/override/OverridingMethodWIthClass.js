// Parent class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(`${this.type} is starting.`);
    }
}

// Subclass
class Car extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }

    // Overriding the start method
    start() {
        console.log(`${this.brand} ${this.type} is starting with a roar.`);
    }
}

// Creating an instance
const myCar = new Car('Sports Car', 'Ferrari');
myCar.start(); // Output: Ferrari Sports Car is starting with a roar.
