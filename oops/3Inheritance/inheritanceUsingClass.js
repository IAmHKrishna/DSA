// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  }
  
  // Subclass
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks.`);
    }
  
    // Overriding the eat method

    // Method overriding occurs when a subclass provides a specific implementation 
    // of a method that is already defined in its superclass.
    //  This allows the subclass to modify or extend the behavior of that method.
    eat() {
      super.eat(); // Call the parent method
      console.log(`${this.name} loves to eat bones.`);
    }
  }
  
  // Creating an instance
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  myDog.eat();
  // Output:
  // Buddy is eating.
  // Buddy loves to eat bones.
  
  myDog.bark();
  // Output: Buddy barks.

  myDog.sleep();
  // Output: Buddy is sleeping.
  