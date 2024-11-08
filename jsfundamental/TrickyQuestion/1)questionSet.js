// question 1

(function test() {
    console.log(void (p = 1 / ""), p);// undefined infinity
  })();

// Explanation
// Division by an empty string: The expression 1 / "" attempts to divide 1 by an empty string, "".
//  In JavaScript, an empty string is converted to 0 in arithmetic operations, 
// so 1 / 0 results in Infinity. Therefore, p is assigned the value Infinity.

// The void operator: The void operator evaluates the expression and always returns undefined, disregarding the result of p = Infinity. So void (p = 1 / "") returns undefined.

// Console output: console.log(void (p = 1 / ""), p) outputs two values:

// undefined from the void operation.
// The value of p, which is Infinity.


// =============================================================================================


// question 2


function myFunction() {
    return "hello";
  }
  myFunction.myVar = "world";
  myFunction.__proto__.myVar = "universe";
  console.log(myFunction.myVar); // Output: "world"
  console.log(myFunction.__proto__.myVar); // Output: "universe"
  console.log(myFunction.prototype.myVar); // Output: undefined
  console.log(myFunction); // Output: [Function: myFunction]{ myVar: 'world' }

// ============================================================================================

// question 3
// Which of the following statements are true?
 null == undefined // true
//  typeof alert is 'function'  // true
//  Number(undefined) is NaN   // true
 null >= 0                 // true


// Explanation
//!) null == undefined

// This is true. In JavaScript, null and undefined are equal (==) in loose equality but not in strict equality (===).
// null == undefined returns true, while null === undefined returns false.
// 2) typeof alert is 'function'

// This is true. In JavaScript, alert is a function (in browsers where alert is available), so typeof alert returns 'function'.
// 3) Number(undefined) is NaN

// This is true. When undefined is converted to a number, it results in NaN. So Number(undefined) indeed returns NaN.
// 4) null >= 0

// This is true. When comparing null to a number, JavaScript coerces null to 0. Therefore, null >= 0 is evaluated as 0 >= 0, which is true.


// =============================================================================================

// question 4

const userDetails = '';
const userID = userDetails[0];

if (' ') { 
    console.log('User allowed to login');
} else {
    console.log('Login failed');
}

// Output --> User allowed to login

// Explanation
// const userDetails = '': The userDetails variable is assigned an empty string.

// const userID = userDetails[0]: Attempting to access the first character (userDetails[0]) of an empty string results in undefined. So userID will be undefined.

// if (' '): Here, the condition is a string with a single space (' '). In JavaScript, any non-empty string, including a string with just spaces, is truthy. Therefore, this condition evaluates as true.

// console.log('User allowed to login');: Since the condition is true, the code within the if block executes


// =============================================================================================

// question 5

let s = new Set();
s.add(45).add(45).add(10).add(30).add(30);
console.log(s);// {45, 10, 30}

// Explanation
// let s = new Set();: This initializes a new Set object named s. 
// Sets in JavaScript only store unique values,
//  meaning duplicate values are automatically ignored.

// Adding values:

// s.add(45).add(45): The first 45 is added to the set, but the second 45 is ignored because 45 is already in the set.
// s.add(10): Adds 10 to the set.
// s.add(30).add(30): Adds 30 to the set, but the second 30 is ignored for the same reason as the duplicate 45.
// console.log(s);: This will output the contents of the set.

// Output --> {45, 10, 30}
// ================================================================

// question 6

const randomValue = 21;

function getInfo() {
    console.log(typeof randomValue);
    const randomValue = 'Prabhat';
}

getInfo();

// Output --> ReferenceError: Cannot access 'randomValue' before initialization

// Explanation
// When getInfo is called, here's what happens step by step:

// Variable Hoisting:
// JavaScript hoists declarations to the top of the function scope. So, within the getInfo function, const randomValue is hoisted, but the assignment ('Prabhat') is not.
// This means randomValue is recognized within the function scope but remains uninitialized until it reaches its line of assignment.
// Accessing randomValue Before Initialization:
// When console.log(typeof randomValue); runs, randomValue in this scope is technically declared but uninitialized (due to the const keyword). Accessing it before initialization causes a ReferenceError due to the Temporal Dead Zone for const and let declarations.
// The outer randomValue (with a value of 21) is not accessed here because JavaScript respects scope, and the inner randomValue shadows the outer one.


// ===========================================================================
// question 7
const increment = n => {
    return n + 1;
};

const printResult = (n, func) => {
    return func(n);
};

console.log(printResult(2, increment));// Output: 3

// ================================================================

// question 8

sessionStorage.setItem('secret', 4585);
// How long is secret accessible?

// Explanation

// The secret stored in sessionStorage is accessible only for the duration of the page session. Specifically:

// Page Session Scope: It will remain accessible as long as the user keeps the browser tab or window open. If the tab or window is closed, the data is removed.
// Page Refresh: Refreshing or reloading the page does not clear sessionStorage, so secret will still be accessible after a refresh within the same session.
// Cross-Tab: sessionStorage data is isolated to the specific tab where it was set, so it won't be accessible from other tabs, even if they are on the same domain.


// output- secret will be accessible until the user closes the tab or browser window.

// =====================================================================================

// question 9
(function test() {
    console.log(arguments,"lll")
    console.log(
        [1, 2, 3, 4].map(function (n) {
            console.log(n,"--",arguments)
            return n === 1 && 1 || arguments.callee(n - 1) * n;
        })
    );
})();

// Output --> [1, 2, 6, 24]

// Explanation
// This code defines an IIFE (Immediately Invoked Function Expression) named test and calls it immediately. Inside, there is a console.log statement that outputs the result of a map operation on the array [1, 2, 3, 4]. Here's a breakdown of how it works:

// Array Mapping:

// [1, 2, 3, 4].map(...) iterates over each element of the array, applying the function defined within the map.
// Recursive Factorial Calculation:

// The map function checks if n === 1. If true, it returns 1.
// Otherwise, it calls arguments.callee(n - 1) * n. Here:
// arguments.callee is a reference to the currently executing function, allowing for recursion.
// This approach computes the factorial of n by recursively calling arguments.callee with n - 1, and multiplying the result by n.
// Example for Each Element:

// For n = 1: n === 1 is true, so it returns 1.
// For n = 2: It calls arguments.callee(1) * 2, which is 1 * 2 = 2.
// For n = 3: It calls arguments.callee(2) * 3, which is 2 * 3 = 6.
// For n = 4: It calls arguments.callee(3) * 4, which is 6 * 4 = 24.
// Output: The resulting array is [1, 2, 6, 24], which is the factorial of each number in [1, 2, 3, 4].

// Important Note
// In strict mode, arguments.callee is not allowed and will throw an error. However, in non-strict mode, this code works as intended.


// ====================================================================================

// question 10
function Friend(name1, name2){
    this.name1 = name1;
    this.name2 = name2;
}

Friend.prototype.fun = function(){
    return this.name1 + " " + this.name2;
}
function Student(name1, name2, schoolName, grade){
    Friend.call(this, name1, name2);
    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

Student.prototype = new Friend();
Student.prototype.constructor = Student;

var std = new Student("John", "Doe", "ABC School", 10);
console.log(std.fun());
console.log(std);
console.log(std.Grade);
console.log(std.name1);
console.log(std.name2);
console.log(std instanceof Student);
console.log(std instanceof Friend);

// ===============================================================================================

// question 11


const obj = {
    value: 10,
    getValue: function () {
      return () => {return this.value};
    }
  };
  
  const value = 20;
  const getValue = obj.getValue();
  console.log(getValue());//10


//   ==========================================
// question 12
const obj1 = {};
Object.defineProperty(obj1, 'length', { get: () => Math.random() });
console.log(obj1.length);// a  random number





