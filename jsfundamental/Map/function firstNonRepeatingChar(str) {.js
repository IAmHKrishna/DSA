function firstNonRepeatingChar(str) {
    // Your logic here
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1);
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return str[i];
        }
    }
    return null;
}

// Test cases
console.log(firstNonRepeatingChar("abacabad")); // Expected: "c"
console.log(firstNonRepeatingChar("aabbcc"));   // Expected: null