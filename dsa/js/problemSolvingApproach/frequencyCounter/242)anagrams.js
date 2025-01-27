// 242. Valid Anagram
// An anagram of a string is another string that contains
// the same characters, only the order of characters can
// be different. For example, “act” and “tac” are anagrams of each other.

// sudo code
// ==============
// 1) create a function which will take two string as arguments and return true and false
// 2) if function return false when
//    * both string length is different
//    * if each character of string1 is not found in string2
// 3) if function return true when
//   * both string length is same
//   * if each character of string1 is  found in string2

function validAnagram(str1, str2) {
    if (str1 === null || str2 === null) return false
    if (str1.length !== str2.length) return false
    if (str1?.length === 0 && str2?.length === 0) return true
    let frequencyCounter1 = {}
    for (let val of str1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1
    }
    for (let val of str2) {
        if (!frequencyCounter1[val]) return false
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] -= 1
        }
    }
    return true
}



// test cases

console.log(validAnagram('', ''), "case1") // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true