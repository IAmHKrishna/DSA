// 4. Trapping Rainwater Problem
// Problem: Given an array of heights where each element represents an elevation map, 
// calculate the amount of water it can trap after raining.
// Approach: Use two pointers (left and right) to track positions at both ends of 
// the array. Track leftMax and rightMax heights to determine how much water each
//  cell can trap.










// Test Cases
// Basic Case
console.log(trapRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6

// No Trapped Water
console.log(trapRainwater([0, 1, 2, 3, 4])); // Output: 0

// Uniform Elevation (Flat Surface)
console.log(trapRainwater([3, 3, 3, 3, 3])); // Output: 0

// Single Dip Between Higher Bars
console.log(trapRainwater([3, 0, 3])); // Output: 3

// Decreasing Heights
console.log(trapRainwater([5, 4, 3, 2, 1])); // Output: 0

// Multiple Dips with Varying Depths
console.log(trapRainwater([4, 2, 0, 3, 2, 5])); // Output: 9

// Edge Case with Small Array (One or Two Elements)
console.log(trapRainwater([2])); // Output: 0
console.log(trapRainwater([2, 3])); // Output: 0

// Higher Bar in the Middle
console.log(trapRainwater([0, 3, 1, 0, 2])); // Output: 3