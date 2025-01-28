// Group Anagrams

// Problem: Given an array of strings, group the anagrams together.

function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      // Sort the string and use it as a key
      const sortedKey = str.split("").sort().join("");
  
      // Add the string to the corresponding group in the map
      if (!map.has(sortedKey)) {
        map.set(sortedKey, []);
      }
      map.get(sortedKey).push(str);
    }
  
    // Return the grouped anagrams as an array of arrays
    console.log(map.values(),"lkjdflsdjfl")
    return Array.from(map.values());
  }
  
  // Example usage
  
  
// test case

const groupedAnagrams =groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupedAnagrams);
