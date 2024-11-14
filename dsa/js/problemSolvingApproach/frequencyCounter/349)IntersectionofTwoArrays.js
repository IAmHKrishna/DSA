// // 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// solution 1 using obj frequency counter
// var intersection = function (nums1, nums2) {
//     let frequencyCounter = {};
//     for (let num of nums1) {
//         frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
//     }
//     let resultArr = []
//     for (let num of nums2) {
//         if (frequencyCounter[num] > 0) {
//             resultArr.push(num)
//             frequencyCounter[num] -= 1
//         }
//     }
//     return resultArr
// };


// solution 2 using  Map and Set Method

// Runtime
// 1 ms
// Beats 82.22%

// Memory
// 51.45 MB
// Beats 13.17%
//  time complexity O(n+m)
// space complexity O(n)
var intersection = function (nums1, nums2) {
    let numMap = new Map();
    for(let num of nums1){
        numMap.set(num,(numMap.get(num)||0)+1)
    }
    let mySet = new Set()
    for(let num of nums2){
        if(numMap.get(num)>0){
            mySet.add(num)
            numMap.set(num,numMap.get(num)-1)
        }
    }
    return [...mySet]
};

// solution 3 using Set method only

// Memory 51.43 MB
// Beats 13.17%

// Runtime
// 2 ms
// Beats 59.57%

// var intersection = function (nums1, nums2) {
//     const setA = new Set(nums1);
//     const setB = new Set(nums2);
//     return [...new Set([...setA].filter(value => setB.has(value)))];
// };

// Test cases
console.log(intersection([1, 2, 2, 1], [2, 2]))
// Output: [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
// Output: [9,4]
