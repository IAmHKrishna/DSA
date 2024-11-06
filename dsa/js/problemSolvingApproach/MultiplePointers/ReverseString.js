// 2. Reverse String
// Problem: Given a string, return it reversed.
// Approach: Use two pointers, one at the start and one at the end of the string.
// Swap characters at the two pointers, then move the pointers towards the center
// until they meet.






// Test Cases
// Basic Case
console.log(reverseString("hello")); // Output: "olleh"

// Palindrome String
console.log(reverseString("madam")); // Output: "madam"

// Single Character String

console.log(reverseString("a")); // Output: "a"

// Empty String
console.log(reverseString("")); // Output: ""

// String with Special Characters
console.log(reverseString("h@ll0!")); // Output: "!0ll@h"

// String with Spaces
console.log(reverseString("hello world")); // Output: "dlrow olleh"

// String with Uppercase and Lowercase Letters
console.log(reverseString("AbCdEfG")); // Output: "GfEdCbA"

// String with Numbers
console.log(reverseString("12345")); // Output: "54321"