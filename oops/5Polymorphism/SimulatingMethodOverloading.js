// Here, the add() method behaves differently depending on the 
// number of arguments provided. This is a simple form of
//  simulating polymorphism by overloading.



class Calculator {
    add(a, b) {
      if (typeof b === 'undefined') {
        return a; // If only one argument, just return it
      } else {
        return a + b; // If two arguments, return their sum
      }
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(5));       // Output: 5 (one argument)
  console.log(calc.add(5, 10));   // Output: 15 (two arguments)
  