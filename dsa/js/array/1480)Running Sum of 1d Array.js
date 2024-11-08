// 1480. Running Sum of 1d Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// binary search solution
var runningSum = function (nums) {   //0 ms Beats  100.00%
    if (nums.length == 0) return []
    let sum = 0
    let arr = []
    for (let val of nums) {
        sum += val
        arr.push(sum)
    }
    return arr
};

// var runningSum = function(nums) { //1 ms Beats  38.38%
//     if(nums.length==0) return []
//     let sum = 0
//     let arr =[]
//    for(let i=0;i<nums.length;i++){
//        sum +=nums[i]
//        arr.push(sum)
//    }
//    return arr
// };


// test case

console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]