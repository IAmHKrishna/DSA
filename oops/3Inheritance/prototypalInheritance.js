// Parent constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to Person's prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Child constructor function
  function Employee(name, age, position) {
    // Call the parent constructor
    Person.call(this, name, age);
    this.position = position;
  }
  
  // Setting up inheritance: Employee.prototype inherits from Person.prototype
  Employee.prototype = Object.create(Person.prototype);
  
  // Correct the constructor pointer
  Employee.prototype.constructor = Employee;
  
  // Adding a method to Employee's prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.position}`);
  };
  
  // Creating an instance of Employee
  const emp = new Employee('Alice', 30, 'Developer');
  
  emp.greet(); // Output: Hello, my name is Alice
  emp.work();  // Output: Alice is working as a Developer
  