// Utility functions
const canEat = {
    eat() {
      console.log(`${this.name} is eating.`);
    }
  };
  
  const canSleep = {
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  };
  
  const canSwim = {
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  };
  
  // Compose a new object
  function createDuck(name) {
    const duck = { name };
    Object.assign(duck, canEat, canSleep, canSwim);
    return duck;
  }
  
  const daffy = createDuck('Daffy');
  daffy.eat();   // Output: Daffy is eating.
  daffy.sleep(); // Output: Daffy is sleeping.
  daffy.swim();  // Output: Daffy is swimming.
  