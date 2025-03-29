

// example 1

function outer() {
    let count = 0;  // Local variable in outer scope

    function inner() {
        count++;        // Inner function can access `count`
        console.log(count);
    }

    return inner;      // Return the inner function
}

const counter = outer();  // `outer()` returns the `inner` function

counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3


// example 2

function counterFunc() {
    let counter = 0;
    return {
        incrementCount: function () {
            ++counter
            console.log(counter)
        },
        decrementCount: () => {
            if(counter===0) return console.log("can't count less then ",counter) 
            --counter;
            console.log(counter)
        }

    }
}

const count = counterFunc()
count.incrementCount()
count.decrementCount()