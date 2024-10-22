class Employee {
    #salary;  // private field
    constructor(name, salary) {
      this.name = name;
      this.#salary = salary;
    }
  
    #getSalary() {
      return this.#salary;
    }
  
    getSalary1() {
        // console.log(this.#getSalary());
      return this.#getSalary();
    }
  }
  
  const emp = new Employee('Alice', 50000);
  console.log(emp.getSalary1()); // Output: 50000
  console.log(emp.salary)