// 1. Async Control Flow
// Q: Implement a function that accepts a list of asynchronous functions and
//  runs them in sequence.
const fs = require('fs');
function runAsyncInSequence(asyncFunctions) {
    return asyncFunctions.reduce((promise, asyncFunc) => {
        // Each async function should return a promise
        // that resolves to the result of the previous function
        // or the initial value if it's the first function
        return promise.then(result => asyncFunc(result));
    }, Promise.resolve());
}
// Example usage:
const asyncFunc1 = () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
const asyncFunc2 = (prevResult) => new Promise(resolve => setTimeout(() => resolve(`${prevResult}, Result 2`), 1000));
const asyncFunc3 = (prevResult) => new Promise(resolve => setTimeout(() => resolve(`${prevResult}, Result 3`), 1000));
const asyncFunctions = [asyncFunc1, asyncFunc2, asyncFunc3];
runAsyncInSequence(asyncFunctions)
    .then(result => console.log(result)) // Output: "Result 1, Result 2, Result 3"
    .catch(error => console.error(error));
// example

async function runSequentially(funcs) {
    const results = [];
    for (const fn of funcs) {
        const result = await fn(); // wait for each function to complete
        results.push(result);      // collect results (optional)
    }
    return results;
}

runSequentially(asyncFunctions).then(console.log);

const funcs = [
    () => new Promise(resolve => setTimeout(() => resolve('A done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('B done'), 500)),
    () => new Promise(resolve => setTimeout(() => resolve('C done'), 300))
];

runSequentially(funcs).then(console.log);
// Output after ~1.8s: ['A done', 'B done', 'C done']

//==========================================================================================================
// 2. Event Loop
// Q: Explain the event loop in JavaScript and how it works with asynchronous code.
// A: The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations,
//  despite being single-threaded. It does this by using a queue to manage asynchronous tasks.
//  When an asynchronous operation is initiated (like a network request),
//  it is sent to the Web APIs (or Node.js APIs) and the main thread continues executing other code.
//  Once the asynchronous operation is complete, its callback is added to the task queue. 
// The event loop continuously checks if the call stack is empty and if there are any tasks in the queue.
//  If the call stack is empty, it dequeues the next task and executes it.
//  This process allows JavaScript to handle multiple operations concurrently without blocking the main thread.

// =====================================================================================================
// 3. Promises
// Q: Explain the difference between `Promise.all` and `Promise.race`.
// A: `Promise.all` takes an array of promises and returns a single promise that resolves when all
//  of the promises in the array have resolved or when the iterable contains no promises.
//  If any of the promises reject, the returned promise will reject with the reason of the first 
// promise that rejected. 
// `Promise.race`, on the other hand, takes an array of promises and returns a single promise that
//  resolves or rejects as soon as one of the promises in the array resolves or rejects, 
// with the value or reason from that promise.
// ==========================================================================================================
// 4. Closures
// Q: What is a closure in JavaScript and how does it work?
// A: A closure is a function that retains access to its lexical scope, 
// even when the function is executed outside that scope. In other words, a closure allows
//  an inner function to access variables from an outer function's scope, even after the outer
//  function has finished executing. This is useful for data encapsulation and creating private variables.
// Example:
function outerFunction() {
    let privateVariable = 'I am private';
    return function innerFunction() {
        console.log(privateVariable);
    }
}
const closure = outerFunction();
closure(); // Output: "I am private"
// =====================================================================================================
// 5. Prototypal Inheritance
// Q: Explain prototypal inheritance in JavaScript.
// A: Prototypal inheritance is a feature in JavaScript that allows an object to inherit properties 
// and methods from another object. Every JavaScript object has a prototype, which is also an object. 
// When trying to access a property or method on an object, JavaScript first checks if the property 
// exists on the object itself. If it doesn't, it looks up the prototype chain until it finds the 
// property or reaches the end of the chain (null). 
// This allows for shared properties and methods between objects, 
// enabling code reuse and a more efficient memory usage.
// Example:
const parent = {
    greet: function () {
        console.log('Hello from parent');
    }
};
const child = Object.create(parent);
child.greet(); // Output: "Hello from parent"
// ==============================================================================================================
// 6. Event Delegation
// Q: What is event delegation and how does it work?
// A: Event delegation is a technique in JavaScript where a single event listener is added to a 
// parent element instead of adding individual listeners to each child element.
//  This is particularly useful for dynamically added elements,
//  as the parent can handle events for all its children
//  without needing to reattach listeners. When an event occurs, the event bubbles up to the parent,
//  where the event listener can determine which child element triggered the event.
// Example:
const parentElement = document.getElementById('parent');
parentElement.addEventListener('click', function (event) {
    if (event.target.matches('.child')) {
        console.log('Child element clicked:', event.target);
    }
});
// This way, we can handle clicks on all child elements with a single event listener.
// ==============================================================================================================
// 7. Debouncing and Throttling
// Q: Explain the difference between debouncing and throttling.
// A: Debouncing and throttling are techniques used to control the rate at which a function is executed.
//  Debouncing ensures that a function is only executed after a certain period of inactivity.
//  For example, if a user is typing in an input field, the debounced function will only be called
//  after the user has stopped typing for a specified amount of time.
//  This is useful for optimizing performance in scenarios like search input or window resizing.
//  Throttling, on the other hand, ensures that a function is executed at most once in a specified time interval.
//  This is useful for scenarios like scrolling or resizing, where we want to limit the number of times
//  a function is called during rapid events.
//  For example, if we throttle a function to execute every 200 milliseconds,
//  it will only be called once every 200 milliseconds, regardless of how many times the event occurs.
// Example of debouncing:
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}
// Example of throttling:
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
// Example usage:
const debouncedFunction = debounce(() => {
    console.log('Debounced function executed');
}, 1000);
const throttledFunction = throttle(() => {
    console.log('Throttled function executed');
}, 1000);
window.addEventListener('resize', debouncedFunction);
window.addEventListener('scroll', throttledFunction);
// ==============================================================================================================
// 8. Deep vs Shallow Copy
// Q: Explain the difference between deep copy and shallow copy.
// A: A shallow copy creates a new object, but does not create copies of nested objects.
//  Instead, it copies references to the nested objects.
//  This means that changes made to nested objects in the copied object will also affect the original object.
//  A deep copy, on the other hand, creates a new object and recursively copies all nested objects,
//  ensuring that the copied object is completely independent of the original object.
//  This means that changes made to nested objects in the copied object will not affect the original object.
// Example of shallow copy:
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (original object is affected)
// Example of deep copy:
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;
console.log(original.b.c); // Output: 3 (original object is not affected)

// =================================================================
// 9)
console.log('A');
setTimeout(() => console.log('B'), 0);  // resove in check phase
Promise.resolve().then(() => console.log('C'));
console.log('D');

// ans 
// A  -> D -> C -> B


// =================================================================
//  Algorithms & Data Structures
// 10. Request Scheduler
// Q: Implement a function that schedules API calls with a cooldown 
// period (e.g., 2s between calls).

async function scheduleRequestsWithCooldown(tasks, cooldownMs) {
    for (let i = 0; i < tasks.length; i++) {
      await tasks[i](); // execute the task
      if (i < tasks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, cooldownMs)); // wait for cooldown
      }
    }
  }
const mockApiCall = (name) => () =>
    new Promise(resolve => {
      console.log(`Calling ${name} at`, new Date().toISOString());
      setTimeout(() => {
        console.log(`Finished ${name} at`, new Date().toISOString());
        resolve(name);
      }, 1000);
    });
   
    mockApiCall("API_1")()
  const tasks = [
    mockApiCall("API_1"),
    mockApiCall("API_2"),
    mockApiCall("API_3"),
  ];
scheduleRequestsWithCooldown(tasks, 2000); // 2s cooldown between each

// ==============================================================================================


fs.readFile('file.txt', () => {
  console.log('File read'); // Poll phase
});

setTimeout(() => {
  console.log('Timeout');   // Timers phase
}, 0);

setImmediate(() => {
  console.log('Immediate'); // Check phase
});



fs.readFile('file.txt', () => {
  console.log('File read'); // This callback runs in the poll phase

  setTimeout(() => {
    console.log('Timeout'); // Timers phase
  }, 0);

  setImmediate(() => {
    console.log('Immediate'); // Check phase
  });
});

