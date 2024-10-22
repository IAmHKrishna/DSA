class Circle {
    static pi = 3.14159; // Static property
  
    constructor(radius) {
      this.radius = radius;
    }
  
    // Static method to calculate the area of a circle
    static calculateArea(radius) {
      return Circle.pi * radius * radius;
    }
  }
  
  // Using static property and static method
  console.log(Circle.pi); // Output: 3.14159
  console.log(Circle.calculateArea(5)); // Output: 78.53975
  