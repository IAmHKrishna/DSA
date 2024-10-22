// const fibonacciFunction = (n) => {
    // if (n <= 0) return 0;
    // if (n === 1) return 1;
//    const fibonacciList =[0, 1];
//    let i =0
//    while (fibonacciList.length < n) {
//     const nextElement= fibonacciList[i]+fibonacciList[i+1]
//     console.log(nextElement)
//     fibonacciList.push(nextElement)
//     i=i+1
//    }
//    return fibonacciList
// };
// Time Complexity O(n)
// Space Complexity O(n)
const fibonacciList =[0, 1];
const fibonacciFunction = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    const nextElement= fibonacciList[fibonacciList.length-2]+fibonacciList[fibonacciList.length-1]
    console.log(nextElement)
    fibonacciList.push(nextElement)
    if(fibonacciList.length<n){
        fibonacciFunction(n)
    }else {
        console.log(fibonacciList) 
    }
 };
console.log(fibonacciFunction(2000));

// Time Complexity O(n)
// Space Complexity O(n)


const nthFibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
};

console.log(nthFibonacci(20));

// Time Complexity O(n)
// Space Complexity O(1)