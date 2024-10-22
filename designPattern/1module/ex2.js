const car = (function () {
    let ownerObject = {
        name: 'John',
        age: 30
    };
    // Private function
    // const ownerDetails = function () {
    //     return ownerObject
    // }
    function ownerDetails() {
        return ownerObject
    }
    return {
        type: 'car',
        start: function () {
            console.log('Car is starting...');
            return " done";
        },
        stop: function () {
            console.log('Car is stopping...');
            return "done"
        },
        ownerName: function () {
            const owner = ownerDetails();
            return owner.name;
        },
    };
})();

console.log(car.type,"type");  // Output: car
console.log(car.start(),"start");  // Output: Car is starting...
console.log(car.stop(),"stop");  // Output: Car is stopping...
console.log(car.ownerName(),"ownerName");  // Output: John