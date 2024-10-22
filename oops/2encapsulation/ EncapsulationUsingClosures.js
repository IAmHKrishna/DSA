// 1. Encapsulation using Closures (Pre - ES6)
// Before ES6, JavaScript did not have true private properties.However,
//  encapsulation could be achieved using closures.A function would create an
//  object, and only public methods would be exposed, while the internal 
// state remained hidden.



// -- In ES6, closures were introduced to support private properties and methods.


function Person(name, age) {  // Closure function
  let _age = age;  // Private variable

  // Private method (accessible only inside the Person function)
  function _validateAge(newAge) {
    return newAge > 0;
  }

  return {
    name,  // Public property
    getAge() { // Public method
      return _age;
    },
    setAge(newAge) { // Public method
      // Use the private method to validate age
      if (_validateAge(newAge)) {
        _age = newAge;
      } else {
        console.log('Invalid age');
      }
    }
  };
}

const person = Person('John', 30);
console.log(person.name);     // Output: John
console.log(person.getAge()); // Output: 30

person.setAge(35);
console.log(person.getAge()); // Output: 35

// Trying to directly access _validateAge will fail
// This is a private method and not accessible outside
console.log(person._validateAge);  // Output: undefined

// Trying to directly access _age will fail
// This is a private variable and not accessible outside
console.log(person._age);  // Output: undefined


