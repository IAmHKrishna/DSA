// BAD: Derived class violates base class expectations
class Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Penguin extends Bird {
    fly() {
      throw new Error("Penguins can't fly!");
    }
  }
  
  // GOOD: Refactor to follow LSP
  class Bird {
    move() {
      console.log("Moving");
    }
  }
  
  class FlyingBird extends Bird {
    move() {
      console.log("Flying");
    }
  }
  
  class Penguin extends Bird {
    move() {
      console.log("Swimming");
    }
  }
  
  // Usage
  const birds = [new FlyingBird(), new Penguin()];
  birds.forEach(bird => bird.move());
  // Output: Flying, Swimming
  