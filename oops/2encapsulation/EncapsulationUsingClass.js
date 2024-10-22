// 2. Encapsulation with Private Fields in ES6+ (ES2021)
// With the introduction of private class fields in ES2021, encapsulation 
// can now be directly implemented in classes using the # symbol to define 
// private properties. These private fields cannot be accessed or modified 
// directly from outside the class.



class Employee {
    #salary;  // Private field
  
    constructor(name, salary) {
      this.name = name;  // Public property
      this.#salary = salary;  // Private property
    }
  
    // Public method to access private salary field
    getSalary() {
      return this.#salary;
    }
  
    // Public method to modify private salary field
    setSalary(newSalary) {
      if (newSalary > 0) {
        this.#salary = newSalary;
      } else {
        console.log('Invalid salary');
      }
    }
  }
  
  const emp = new Employee('Alice', 50000);
  console.log(emp.name);       // Output: Alice (public property)
  console.log(emp.getSalary()); // Output: 50000
  
  emp.setSalary(60000);
  console.log(emp.getSalary()); // Output: 60000
  
  // Trying to access private field directly will result in an error
  //console.log(emp.#salary);  // Error: Private field '#salary' must be declared in an enclosing class
  