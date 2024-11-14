// 451.Character Frequency Sorting
// Problem: Sort a string based on the frequency of characters.

// O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)
// example 1
// ==================
// function frequencySort(str){
//     let frequencyCounter ={}
//     for(let val of str){  //o(n)
//         frequencyCounter[val]= ++frequencyCounter[val]||1
//     }
// let sorted = Object.entries(frequencyCounter).sort((a,b)=>b[1]-a[1]) // O(n log n)
//     return sorted.map(a=>Array(a[1]).fill(a[0]).join('')).join('')  //o(n)
// }

// example 2
// function frequencySort(str) {
//     let myMap = new Map()
//     for (let val of str) {
//         myMap.set(val, (myMap.get(val) || 0) + 1)
//     }
//     let sorted = [...myMap.entries()].sort((a, b) => b[1] - a[1])
//     // return sorted.map(a=>Array(a[1]).fill(a[0]).join('')).join('')
//     let result = ''
//     for (const char of sorted) {
//         // result += Array(char[1]).fill(char[0]).join('')
//         result += char[0].repeat(char[1])
//     }
//     return result
// }

// time complexity O(n log n)


// space complexity O(n)



// example 3 -> bucket sort approach
// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?usp=sharing
var frequencySort = function (s) {
    // Step 1: Count frequency of each character
    const frequencyMap = new Map();
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Step 2: Create a bucket array where index represents frequency
    const buckets = Array(s.length + 1).fill(null).map(() => []);
    // Step 3: Fill the buckets with characters based on their frequency
    for (const [char, freq] of frequencyMap.entries()) {
        buckets[freq].push(char);
    }
    // Step 4: Build the result string by concatenating characters from highest frequency to lowest
    let result = '';
    for (let i = buckets.length - 1; i > 0; i--) {   // O(n)
        console.log(buckets[i],i)
        for (const char of buckets[i]) {
            result += char.repeat(i);
        }
    }
    return result;
};


// Test cases
console.log(frequencySort("tree"))
// Output: "eetr" or "eert"
// console.log(Array(2).fill('e').join(''))
// Output: ["e", "e", "e", "r", "t"]

console.log(frequencySort("cccaaa"))
// Output: "cccaaa"

console.log(frequencySort("Aabb"))
// Output: "bbAa"   
