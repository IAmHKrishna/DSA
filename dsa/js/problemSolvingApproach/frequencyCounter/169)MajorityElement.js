// 169. Majority Element
// Problem: Given an array of size n, find the majority element
// that appears more than n/2 times.


// solution 1 using frequency counter or hash table
var majorityElement = function(nums) {
  let mid = Math.floor(nums.length/2)
  // let mid = Math.round(nums.length/2)
  let freqObj ={}
  for(let num of nums){
    freqObj[num]=(freqObj[num]||0)+1
      if(freqObj[num]>mid){
          return num
      }
  }
};


// function majorityElement(nums: number[]): number {
//   //declaring a empty hashamp
//   const map : Record<number,number> = {};
//   const majorityCount : number = Math.floor(nums.length/2);
//   for(const num of nums){
//       //Assigning a value to map[num]; if it's undefined, initialize it to 0 and then increment.
//       map[num] = ( map[num] || 0 ) + 1;
//       if(map[num] > majorityCount) return num;
//   }
// };


// solution 2 using sorting
// var majorityElement = function(nums) {
//     nums.sort((a,b)=>a-b)
//     return nums[Math.floor(nums.length/2)]
// };



// solution 3 using voting algorithm
// var majorityElement = function(nums) {
//   let count = 0;
//   let result = null;
//   for (let num of nums) {
//     if (count === 0) result = num;
//     if (num === result)count++;
//     else count--;
//   }
//   return result;
// };

var majorityElement = function(nums) {
  let count = 0;
  let result = null;

  // First pass to find a candidate
  for (let num of nums) {
    if (count === 0) result = num;
    count += (num === result) ? 1 : -1;
  }

  // Second pass to validate the candidate
  count = 0;
  for (let num of nums) {
    if (num === result) count++;
  }

  return count > Math.floor(nums.length / 2) ? result : null;
};

console.log(majorityElement([3, 2, 3, 2, 1])); // Output: null
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // Output: null

// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?usp=sharing
// Boyer-Moore Voting Algorithm
// function majorityElement(nums) {
//   let candidate = null;
//   let count = 0;

//   // Step 1: Candidate selection
//   for (let num of nums) {
//       if (count === 0) {
//           candidate = num;
//       }
//       count += (num === candidate) ? 1 : -1;
//   }

//   // Step 2: Confirmation (if not guaranteed a majority element exists)
//   count = 0;
//   for (let num of nums) {
//       if (num === candidate) {
//           count++;
//       }
//   }

//   if (count > Math.floor(nums.length / 2)) {
//       return candidate;
//   }

//   return null; // Return null if no majority element exists
// }


// Test cases
console.log(majorityElement([3,2,3]))   // 3
console.log(majorityElement([3,2,3,3,2,1]))   // null
console.log(majorityElement([2,2,1,1,1,2,2])) // 2

