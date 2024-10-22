// Abstract class Vehicle
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Method to display vehicle details
    displayInfo() {
        console.log(`Vehicle: ${this.make} ${this.model}`);
    }

    // Abstract method - should be implemented by subclasses
    startEngine() {
        throw new Error('Method "startEngine()" must be implemented.');
    }
}

// Subclass Car extending Vehicle
class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    // Implementing the abstract method
    startEngine() {
        console.log(`${this.make} ${this.model}'s engine started with a key.`);
    }

    // Additional method specific to Car
    openTrunk() {
        console.log(`${this.make} ${this.model}'s trunk is now open.`);
    }
}

// Subclass ElectricCar extending Vehicle
class ElectricCar extends Vehicle {
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity; // in kWh
    }

    // Implementing the abstract method
    startEngine() {
        console.log(`${this.make} ${this.model}'s electric motor started silently.`);
    }

    // Additional method specific to ElectricCar
    chargeBattery() {
        console.log(`${this.make} ${this.model}'s battery is charging.`);
    }
}

// Using the classes
const myCar = new Car('Toyota', 'Corolla', 4);
myCar.displayInfo();          // Vehicle: Toyota Corolla
myCar.startEngine();          // Toyota Corolla's engine started with a key.
myCar.openTrunk();            // Toyota Corolla's trunk is now open.

const myElectricCar = new ElectricCar('Tesla', 'Model S', 100);
myElectricCar.displayInfo();  // Vehicle: Tesla Model S
myElectricCar.startEngine();  // Tesla Model S's electric motor started silently.
myElectricCar.chargeBattery(); // Tesla Model S's battery is charging.
