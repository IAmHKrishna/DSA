// Parent constructor function
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.start = function () {
    console.log(`${this.type} is starting.`);
};

// Subclass constructor function
function Car(type, brand) {
    Vehicle.call(this, type);
    this.brand = brand;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Overriding the start method
Car.prototype.start = function () {
    console.log(`${this.brand} ${this.type} is starting with a roar.`);
};

// Creating an instance
const myCar = new Car('Sports Car', 'Ferrari');
myCar.start(); // Output: Ferrari Sports Car is starting with a roar.
