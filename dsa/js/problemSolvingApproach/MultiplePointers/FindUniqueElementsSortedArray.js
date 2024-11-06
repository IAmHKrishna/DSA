// 3. Find Unique Elements in Sorted Array
// Problem: Given a sorted array, return the count of unique elements in the array.
// Approach: Use one pointer to track the unique element (i), and
//  move another pointer (j) through the array. If arr[i] is different from arr[j],
//   move i forward and assign arr[j] to arr[i].




// Test Cases
// Basic Case with No Duplicates
console.log(countUniqueValues([1, 2, 3, 4, 5])); // Output: 5

// Case with Some Duplicates
console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 5])); // Output: 5

// Case with All Elements the Same
console.log(countUniqueValues([3, 3, 3, 3])); // Output: 1

// Case with Negative and Positive Numbers
console.log(countUniqueValues([-2, -1, -1, 0, 1, 2, 2, 3])); // Output: 6

// Empty Array
console.log(countUniqueValues([])); // Output: 0

// Array with One Element
console.log(countUniqueValues([7])); // Output: 1

// Array with Large Number of Duplicates
console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 3, 4, 4])); // Output: 4
