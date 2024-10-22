// 1. Encapsulation Encapsulation refers to the bundling of data (variables) and methods (functions) that operate on the data into a single unit (object). It restricts direct access to some of an object’s components, which can help prevent accidental modification of data. In JavaScript, encapsulation is typically achieved using closures or private class fields.

// Example:


class Person {
  // Encapsulation using private fields
  #name;
  constructor(name, age) {
    this.#name = name; // Private field
    this.age = age;    // Public field
  }

  // Getter method to access private field
  getName() {
    return this.#name;
  }

  // Setter method to modify private field
  setName(newName) {
    this.#name = newName;
  }
}

const person = new Person('Alice', 25);
console.log(person.getName()); // Accessing private field through getter
person.setName('Bob');         // Modifying private field through setter
console.log(person.getName()); 
console.log(person.age);       // Direct access to public field