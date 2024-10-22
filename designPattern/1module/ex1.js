const CounterModule = (function () {
    let counter = 0;

    return {
        increment() {
            counter++;
        },
        getCounter() {
            return counter;
        }
    };
})();

CounterModule.increment();
console.log(CounterModule.getCounter()); // Output: 1
