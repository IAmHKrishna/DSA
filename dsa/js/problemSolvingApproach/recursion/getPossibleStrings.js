// Write a function which takes a number as an input and returns all possible strings generated from that number
// Approach
// Map each digit (2-9) to corresponding letters, just like on a phone keypad.
// Use recursion to generate all possible strings.
// Base case: If we reach the last digit, return the corresponding letters.
// Recursive case: Generate combinations for the rest of the number and append characters for the current digit.
function getPossibleStrings(number) {
    if (typeof number !== "number") return []; // Handle invalid input
    
    const digitToLetters = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno",
        "7": "pqrs", "8": "tuv", "9": "wxyz"
    };
    
    const numStr = number.toString();
    
    function generateCombinations(index, currentString) {
        if (index === numStr.length) {
            return [currentString];
        }
        
        let digit = numStr[index];
        let letters = digitToLetters[digit] || ""; // Ignore 0 & 1 as they have no mappings
        
        let results = [];
        for (let letter of letters) {
            results = results.concat(generateCombinations(index + 1, currentString + letter));
        }
        
        return results;
    }
    
    return generateCombinations(0, []);
}

// Example Usage:
console.log(getPossibleStrings(23)); 
// Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']


// Explanation
// Mapping: The digitToLetters object maps digits to corresponding letters (like on a phone keypad).
// Recursive Function:
// At each step, it picks letters corresponding to the current digit.
// Calls itself for the next digit, building combinations.
// Base Case: When we reach the last digit, we return the accumulated string.
// Edge Cases: The function handles numbers containing 0 or 1 by skipping them.


function getStrings(number) {
    const mapping = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno",
        "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    function generate(index, current) {
        if (index === number.length) return [current]; // Base case

        let digit = number[index];
        let letters = mapping[digit] || ""; // Get letters for the digit

        let result = [];
        for (let letter of letters) {
            result.push(...generate(index + 1, current + letter)); // Recursion
        }

        return result;
    }

    return number.length ? generate(0, "") : [];
}

// Example Usage
console.log(getStrings("23")); 
// Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
