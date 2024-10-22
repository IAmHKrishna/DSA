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