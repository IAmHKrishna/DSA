class Car {
    constructor() {
        this.type = 'car';
    }
}

class Truck {
    constructor() {
        this.type = 'truck';
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        switch (vehicleType) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const truck = factory.createVehicle('truck');

console.log(car.type);  // Output: car
console.log(truck.type);  // Output: truck
