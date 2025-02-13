function minWindow(s, t) {
    if (t.length > s.length) return "";

    let targetMap = new Map();
    for (let char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
console.log(targetMap);
    let left = 0, right = 0;
    let requiredChars = targetMap.size;
    let formed = 0;
    let windowCounts = new Map();
console.log(windowCounts,"windowCounts");
    let minLength = Infinity;
    let minWindowStart = 0;

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (targetMap.has(char) && windowCounts.get(char) === targetMap.get(char)) {
            formed++;
        }

        while (formed === requiredChars) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindowStart = left;
            }

            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            if (targetMap.has(leftChar) && windowCounts.get(leftChar) < targetMap.get(leftChar)) {
                formed--;
            }

            left++; // Shrink window
        }

        right++; // Expand window
    }

    return minLength === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minLength);
}
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
