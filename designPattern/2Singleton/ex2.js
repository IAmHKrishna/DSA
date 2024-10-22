class Singleton {
    // Static property to hold the single instance
    static instance;
  
    constructor() {
      // Step 1: If an instance already exists, return the existing instance
      if (Singleton.instance) {
        // Return the existing instance
        return Singleton.instance;
      }
  
      // Step 2: Otherwise, initialize the new instance
      this.name = "Singleton Instance";
      Singleton.instance = this; // Save this instance to the static property
  
      // Return the instance (optional but clearer)
      return this;
    }
  
    // Step 3: A method to demonstrate behavior
    getName() {
      return this.name;
    }
  }
  
  // Usage:
  const obj1 = new Singleton();
  const obj2 = new Singleton();
  
  // Both obj1 and obj2 will refer to the same instance
  console.log(obj1 === obj2); // true
  console.log(obj1.getName()); // "Singleton Instance"
  console.log(obj2.getName()); // "Singleton Instance"
  