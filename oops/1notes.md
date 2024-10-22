Object Oriented Programming(oop)
=====================
In JavaScript, Object-Oriented Programming (OOP) is a programming paradigm that involves concepts like classes, objects, inheritance, encapsulation, abstraction, and polymorphism. Here's a breakdown of the key OOP concepts in JavaScript:

1) **Classes and Objects**
------------------------
**Class:** A blueprint for creating objects. Introduced in ES6, a class defines properties and methods that can be shared by objects.
**Object:** An instance of a class, representing an entity with properties (attributes) and methods (behaviors).

2) **Encapsulation**
- Encapsulation refers to the bundling of data (variables) and methods (functions) inside a class and controlling access to them.
- In JavaScript, access to properties can be controlled - using the # symbol for private fields (ES2021).

- Encapsulation in JavaScript refers to the practice of bundling data (variables) and methods (functions) together within an object or class, while restricting access to some of the object’s properties. The idea is to keep the internal implementation details hidden and only expose what's necessary, creating a clear boundary between the object’s internal state and the outside world.

Encapsulation helps in:

    Data protection: Preventing direct access to sensitive information.
    Modular code: Keeping the internal workings of objects separate from their external interface.
    In JavaScript, encapsulation can be implemented in two main ways:

    Using closures to simulate private variables.
    Using ES6 classes with private fields (introduced in ES2021).


3) **Inheritance**
- Inheritance allows one class to inherit properties and methods from another class. This helps in code reuse and creating hierarchical class structures.
- The extends keyword is used to implement inheritance.

4) **Abstraction**
- Abstraction is the concept of hiding the complex implementation details and exposing only the necessary functionalities.
- JavaScript doesn't have direct support for abstraction like some other languages (e.g., abstract classes), but this can be achieved using methods that are not exposed outside the class.
- Using private fields or methods can help achieve abstraction.

In JavaScript, abstraction can be achieved using various techniques, such as:

* **Using Classes and Methods**
* **Leveraging Closures for Data Privacy**
* **Utilizing Modules to Encapsulate Functionality**

1) **Polymorphism**
- Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows methods to behave differently based on the object that invokes them.
- In JavaScript, polymorphism is achieved through method overriding and method overloading (though method overloading is less common).

1. **Constructor and this keyword**
- The constructor method is a special method that is called when an object is instantiated from a class.
- The this keyword refers to the current instance of the class.

example:
`
``class Car {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    console.log(`This car is a ${this.brand}`);
  }
}

const car = new Car('Toyota');
car.showBrand();  // Output: This car is a Toyota```


1. **Static Methods**
- Static methods are methods that belong to the class rather than instances of the class. They are called directly on the class.

1. **Prototypes**
- JavaScript uses prototypes to implement inheritance. 
- Every object in JavaScript has a prototype,   and objects inherit properties and methods from their prototype.
- You can manually set prototypes using the Object.create() method.

1. **Mixins**
Mixins allow you to combine multiple behaviors into a class. This is helpful when you want to avoid multiple inheritance.





``



Encapsulation vs Abstraction in JavaScript
1. Encapsulation Encapsulation refers to the bundling of data (variables) and methods (functions) that operate on the data into a single unit (object). It restricts direct access to some of an object’s components, which can help prevent accidental modification of data. In JavaScript, encapsulation is typically achieved using closures or private class fields.

Example:

javascript
Copy code
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
In this example, the #name field is private and can only be accessed or modified using methods. This is an example of encapsulation, as the internal details of how the name is stored are hidden.

2. Abstraction Abstraction is the process of hiding the implementation details and only exposing the essential features of an object. The focus is on what an object can do rather than how it does it. In JavaScript, abstraction can be achieved by providing an interface (e.g., public methods) while keeping the complexity hidden from the user.

Example:

javascript
Copy code
class Car {
  constructor() {
    this.engineStarted = false;
  }

  // Abstracted behavior
  start() {
    this.#startEngine();
    console.log('Car is starting...');
  }

  // Private method (implementation hidden from outside)
  #startEngine() {
    this.engineStarted = true;
    console.log('Engine started.');
  }
}

const myCar = new Car();
myCar.start(); // Abstracted method, user doesn't need to know the internal details
In this example, the method start() provides an abstracted interface to the user, who doesn't need to know how the #startEngine() method works internally.

Key Differences:
**Encapsulation**                       
* Bundles data and methods into a single unit (object).
* Protects data by restricting direct access to certain components (e.g., private fields).
* Can be achieved using private fields, setters, and getters in JavaScript.
* Example: Hiding private fields like #name in the Person class.

**Abstraction**
* Hides complexity and shows only essential details.
* Focuses on providing an easy-to-use interface, hiding the internal workings.
* Can be achieved by providing public methods while hiding the internal implementation.
* Example: Providing an abstracted start() method in the Car class.