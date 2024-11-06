// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.


// example 2
// Pseudocode
// 1) create the function which take a array and number as arguments and  return maximum sum of n consecutive elements in the array
// 2) if function return null when 
//    * array is empty
//    * n is greater than array length
// 3) if function return maximum sum of n consecutive elements in the array when 
//   * array is not empty
//   * n is less than array length
// 4)first loop set a first  sum of consecutive elements from 0 to num from arr store im tempSum
// 5)second loop start from num to length of array 
//   * tempSum = tempSum + arr[i] - arr[i-num]
//   * compare tempSum with maxSum
//   * update maxSum if tempSum is greater than maxSum
// 6) return maxSum

function maxSubarraySum(arr,num){
    if(!arr||arr.length===0||num>arr.length) return null
    let tempSum=0
    let maxSum=0
    for(let j=0;j<num;j++){
        tempSum = tempSum+arr[j]
    }
    maxSum=tempSum
    for(let i=num;i<arr.length;i++){
        tempSum= tempSum +arr[i]-arr[i-num]
        maxSum = Math.max(maxSum, tempSum);
        // if(tempSum>maxSum){
        //     maxSum=tempSum
        // }
    }
    return maxSum
}


// =====================================================================================

// example 1  (not a good solution - worse case)

// Pseudocode
// ==============
// 1) create the function which take a array and number as arguments and  return maximum sum of n consecutive elements in the array
// 2) if function return null when 
//    * array is empty
//    * n is greater than array length
// 3) if function return maximum sum of n consecutive elements in the array when 
//   * array is not empty
//   * n is less than array length

// 4)  Set max to a very small number (negative infinity)
// 5)  Iterate over each possible starting point for subarrays of length 'num'
// 6)  Set temp to 0  // Temporary variable to store the sum of the current subarray
// 7)  Sum the elements of the subarray starting from index 'i' with length 'num'
// 8)   If the current subarray sum (temp) is greater than max, update max
// 9)  Set max to temp
// 10) Return max  // Return the maximum subarray sum found

// complexity
// time complexity  O(n2)
// space complexity O(n)



// function maxSubarraySum(arr,num){   
//     if(arr.length === 0 || num > arr.length){
//         return null
//     }
//     let max = - Infinity
//     for(i=0;i<arr.length-num+1;i++){
//         temp =0;
//        for(j=0;j<num;j++){
//         temp = temp + arr[i+j]
//        }
//        if(temp>max){
//         max=temp
//        }
//     }
//     return max
// }

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null