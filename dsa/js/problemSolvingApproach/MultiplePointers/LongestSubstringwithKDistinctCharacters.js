// 5. Longest Substring with K Distinct Characters
// Problem: Given a string, find the length of the longest substring that contains 
// at most k distinct characters.
// Approach: Use two pointers to represent the start and end of a sliding window.
//  Expand the window by moving the end pointer and shrink the window from the
//   start when more than k distinct characters are found.
























// Test Cases
// Basic Case with Exactly k Distinct Characters
console.log(longestSubstringWithKDistinct("araaci", 2)); // Output: 4

// Case with More Than k Distinct Characters
console.log(longestSubstringWithKDistinct("araaci", 1)); // Output: 2

// All Characters Distinct, k is Large
console.log(longestSubstringWithKDistinct("abcdef", 3)); // Output: 3

// String with k Larger Than Number of Distinct Characters
console.log(longestSubstringWithKDistinct("aabbcc", 4)); // Output: 6

// Single Character String
console.log(longestSubstringWithKDistinct("a", 1)); // Output: 1

// Edge Case with Empty String
console.log(longestSubstringWithKDistinct("", 3)); // Output: 0

// String with Repeated Characters
console.log(longestSubstringWithKDistinct("aaabbccc", 2)); // Output: 5

// k Equals the Number of Distinct Characters in the String
console.log(longestSubstringWithKDistinct("abaccc", 3)); // Output: 6

// Case with k Equals 0
console.log(longestSubstringWithKDistinct("abc", 0)); // Output: 0

// Long String with Alternating Characters
console.log(longestSubstringWithKDistinct("abababababab", 2)); // Output: 12