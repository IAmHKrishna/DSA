// Parent object
const person = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Child object inheriting from 'person'
  const employee = Object.create(person);
  employee.name = "Krishna";
  employee.role = "Developer";
  
  employee.greet();   // Output: Hello, my name is Krishna
  console.log(employee.__proto__ === person);  // true
  