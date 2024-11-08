// 1539. Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.


/**
 * Finds the kth missing positive number from a sorted array.
 *
 * @param {number[]} arr - An array of positive integers sorted in a strictly increasing order.
 * @param {number} k - The kth position to find the missing positive integer for.
 * @returns {number} The kth missing positive integer.
 */
// var findKthPositive = function (arr, k) {
//     let left = 0;
//     let right = arr.length - 1;

//     console.log(`Initial state: left=${left}, right=${right}, k=${k}`);
    
//     // Perform binary search to find the position where the kth missing number lies
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         console.log(`left=${left},right=${right},Checking mid=${mid}, arr[mid]=${arr[mid]}, missingCount=${arr[mid] - mid - 1}`);

//         // Calculate the number of missing numbers until the current mid
//         if (arr[mid] - mid - 1 < k) {
//             left = mid + 1; // Move right if the kth missing is beyond mid
//             console.log(`Moving right: new left=${left}`);
//         } else {
//             right = mid - 1; // Move left if the kth missing is before mid
//             console.log(`Moving left: new right=${right}`);
//         }
//     }

//     // The kth missing number is found at position left + k
//     console.log(`Kth missing positive integer is at position: ${left + k}`);
//     return left + k;
// };


// time complexity O(log n)
// space complexity O(1)



// solution 1 (binary search)
// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?tab=t.5o4exvqrfkdl
function findKthPositive(arr, k) {
    let left = 0;
    let right = arr.length - 1;
  
    // Binary search to find the first index where missing_count >= k
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let missingCount = arr[mid] - (mid + 1);
  
      if (missingCount < k) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Calculate the k-th missing integer
    return left + k;
  }
  //  time complexity O(log n)
//  space complexity O(1)



//    solution 2 (leaner search)
// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?tab=t.0
function findKthPositive(arr, k) {
    let missingCount = 0;  // Total missing count encountered
    let expected = 1;      // The next expected positive integer
  
    for (let i = 0; i < arr.length; i++) {
        console.log(`i=${i}, arr[i]=${arr[i]}, missingCount=${missingCount}, expected=${expected}`);
      while (expected < arr[i]) {
        missingCount++;
        if (missingCount === k) return expected;
        expected++;
      }
      expected = arr[i] + 1;  // Move expected to the next number after the current element
    }
  
    // If we reach here, it means we didn't find the k-th missing number within arr
    return expected + (k - missingCount - 1);
  }
  

// time complexity O(n)
// space complexity O(1)









// Test case

console.log(findKthPositive([2, 3, 4, 7, 11], 5)) // 9

console.log(findKthPositive([1, 2, 3, 4], 2)) // 6

console.log(findKthPositive([1, 2, 3, 4], 3)) // 5
