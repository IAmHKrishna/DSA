function add(a) {
    return function(b) {
      if (b !== undefined) {
        return add(a + b);    // Recursive currying
      }
      return a;                // Return the final result
    };
  }
  
  console.log(add(1)(2)(3)());       // Output: 6
  console.log(add(10)(20)(30)(40)()); // Output: 100
  