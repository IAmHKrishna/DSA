class Person {
    #age;  // Private field
  
    constructor(name, age) {
      this.name = name;  // Public property
      this.#age = age;   // Private field
    }
  
    // Private method
    #validateAge(newAge) {
      return newAge > 0;
    }
  
    getAge() {
      return this.#age;
    }
  
    setAge(newAge) {
      if (this.#validateAge(newAge)) {  // Using private method
        this.#age = newAge;
      } else {
        console.log('Invalid age');
      }
    }
  }
  
  const person = new Person('John', 30);
  console.log(person.name);     // Output: John (public property)
  console.log(person.getAge()); // Output: 30
  
  person.setAge(35);
  console.log(person.getAge()); // Output: 35
  
  // Trying to directly access private fields or methods will fail
  console.log(person.#age);          // Error: Private field '#age' must be declared in an enclosing class
  console.log(person.#validateAge);  // Error: Private field '#validateAge' must be declared in an enclosing class
  