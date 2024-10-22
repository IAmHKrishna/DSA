class MathUtils {
    // Static method to calculate the square of a number
    static square(number) {
      return number * number;
    }
  
    // Static method to calculate the cube of a number
    static cube(number) {
      return number * number * number;
    }
  
    // Static method to find the maximum of two numbers
    static max(a, b) {
      console.log(this.cube(a),"================")
      return a > b ? a : b;
    }
  }
  
  // Using static methods
  console.log(MathUtils.square(5)); // Output: 25
  console.log(MathUtils.cube(3));   // Output: 27
  console.log(MathUtils.max(10, 20)); // Output: 20
  