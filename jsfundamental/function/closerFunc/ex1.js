// A closure is a function bundled with its lexical scope 
// (the variables available at the time of function creation).
// It gives you access to the outer function’s 
// variables from an inner function, even after the outer 
// function has finished executing.

// 2. How Closures Work
// In JavaScript, when a function is created, it forms a lexical
//  environment (scope).

// This environment contains references to all the variables 
// that were in scope at the time the function was declared.

// Even after the outer function finishes execution, 
// the inner function retains access to the outer function's
//  variables due to the closure.
function operations() {
    function _validateNumber(num) {
        if (typeof num !== 'number'&& isNaN(num)) {
            throw new Error('Input must be a number');
        }
    }
    return {
        add: function (a, b) {
            _validateNumber(a);
            _validateNumber(b);
            return a + b;
        },
        subtract: function (a, b) {
            _validateNumber(a);
            _validateNumber(b);
            return a - b;
        }
    }
}

const curd = operations();
console.log(curd.add(10, "11"));
console.log(curd.subtract(10, 20))