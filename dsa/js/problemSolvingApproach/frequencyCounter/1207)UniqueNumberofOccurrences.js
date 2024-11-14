
// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.



// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


// var uniqueOccurrences = function(arr) {
//     let frequencyCunter={}
//     for(let val of arr){
//         frequencyCunter[val] = (frequencyCunter[val]||0) +1
//     }
//     let removeDuplicate = new Set(Object.values(frequencyCunter))
//     // console.log(removeDuplicate,"removeDuplicate")
//     if(removeDuplicate.size===Object.values(frequencyCunter).length){
//         return true
//     }

//     return false
// };

var uniqueOccurrences = function (arr) {
    const map1 = new Map();
    for (let val of arr) {
        map1.set(val, (map1.get(val) || 0) + 1);
    }
    let removeDuplicate = new Set([...map1.values()])
    if (removeDuplicate.size === map1.size) return true
    return false
}
// var uniqueOccurrences = function(arr) {
//     let frequencyCunter={}
//     for(let val of arr){
//         frequencyCunter[val] = (frequencyCunter[val]||0) +1
//     }
//     return new Set(Object.values(frequencyCunter)).size===Object.values(frequencyCunter).length
// };

// test cases

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))//true
console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]))//false
console.log(uniqueOccurrences([1, 2]))//false