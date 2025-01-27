// Two Sum Problem (Sorted Array)
// Problem: Given a sorted array of integers and a target sum, find two numbers 
// that add up to the target.
// Approach: Use two pointers, one at the beginning (left) 
// and one at the end (right) of the array. If the sum of the two numbers
//  is equal to the target, return the pair. If the sum is too low, increment left.
//   If it's too high, decrement right.

function twoSum(arr,target){
    if(!arr || arr.length===0) return null
    let i = 0
    let j = i+1
    while(i<arr.length-2){
        console.log(i,j)
    }
}



// Test Cases
// 1) Basic Case with Positive Numbers
console.log(twoSum([1, 2, 3, 4, 6], 10)); // Output: [4, 6]

// // 2) Pair in the Middle of Array
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 9)); // Output: [2, 7]

// // 3)Negative and Positive Numbers
// console.log(twoSum([-3, -1, 0, 2, 4, 6, 8], 5)); // Output: [-1, 6]

// // 4) No Valid Pair
// console.log(twoSum([1, 2, 3, 9], 8)); // Output: null

// // 5) Duplicate Elements
// console.log(twoSum([1, 1, 2, 3, 3, 4, 5], 6)); // Output: [1, 5]

// // 6) Single Pair in Array
// console.log(twoSum([1, 4], 5)); // Output: [1, 4]

// // 7) Empty Array
// console.log(twoSum([], 10)); // Output: null