// Object Protection Methods

// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Returns true if object is extensible
// Returns true if properties can be added to an object
const isExtensible = Object.isExtensible(car)
console.log(isExtensible,"isExtensible")

// Prevents adding object properties
const preventExtensions = Object.preventExtensions(car)

// Prevents adding and deleting object properties
Object.seal(car)
delete car.type
console.log(car)

// Returns true if object is sealed
const isSealed = Object.isSealed(car)
console.log(isSealed,"isSealed")
// Prevents any changes to an object
Object.freeze(car)


// Returns true if object is frozen
const isFrozen = Object.isFrozen(car)
console.log(isFrozen,"isFrozen")