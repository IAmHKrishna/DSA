// Check if a string is a palindrome.
// palindrome:- word, phrase, or sequence that reads the same
//  backward as forward, e.g., madam or nurses run.


// 1. Using String Reverse

function isPalindrome(str) {
    const reverseStr = str.split("").reverse().join("")
    if (str === reverseStr) return true
    else return false
}

console.log(isPalindrome("krishna"))
console.log(isPalindrome("madam"))
console.log(isPalindrome("racecar"))