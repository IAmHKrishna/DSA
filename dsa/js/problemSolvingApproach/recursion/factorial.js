function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}


// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total
// }

function getFactorial(numStr) {
  let num = Number(numStr);
  let total = 1;

  for (let i = 2; i <= num; i++) {
      total *= i;
  }

  console.log(total);
}

console.log(factorial(5)); // Output: 120