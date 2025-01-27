// Frequency of Letters in a String
// Problem: Count the frequency of each letter in a string and
//  return an object with the count of each letter.

var frequencyCounter = function (str) {
    let frequencyCounter = {}
    for (let char of str) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    }
    return frequencyCounter
}


// test cases
console.log(frequencyCounter("hello"))
// Output: { h: 1, e: 1, l: 2, o: 1 }
