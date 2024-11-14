// 387. First Unique Character in a String
//  Problem: Find the first non-repeating character in a string
//   and return its index. If it doesn’t exist, return -1.


// solution 1 using frequency counter
// time O(n) | space O(n)
//  runtime 39 ms 
// memory 54.54 MB
// ====================================================
// var firstUniqChar = function(s) {
//     let freq = {}
//     for (let char of s){
//         freq[char] = (freq[char] || 0) + 1
//     }
//     for(let char of s){
//         if(freq[char] === 1){
//             return s.indexOf(char)
//         }
//     }
//     return -1
// };

// solution 2 using Hash Table
// =================================
// runtime 50 ms | memory 55.81 MB
// var firstUniqChar = function(s) {
//     let strMap = new Map()
//     for(let char of s){
//         strMap.set(char, (strMap.get(char) || 0) + 1)
//     }
//     for(let char of s){
//         if(strMap.get(char) === 1){
//             return s.indexOf(char)
//         }
//     }
//     return -1
// }


// solution 3 using Set
// =============================================
// var firstUniqChar = function(s) {
//     let strSet = new Set()
//     for(let char of s){
//         if(strSet.has(char)){
//             strSet.delete(char)
//         }else{
//             strSet.add(char)
//         }
//     }
//     for(let char of s){
//         if(strSet.has(char)){
//             return s.indexOf(char)
//         }
//     }
//     return -1    
// }

// solution 4 using Array
// ------------------------------------------
// var firstUniqChar = function(s) {
//     let arr = new Array(26).fill(0)
//     for(let char of s){
//         arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
//     }
//     for(let i = 0; i < s.length; i++){
//         if(arr[s.charCodeAt(i) - 'a'.charCodeAt(0)] === 1){
//             return i
//         }
//     }
//     return -1
// }

// solution 5 using Map
// ------------------------------------------
// var firstUniqChar = function(s) {
//     let map = new Map()
//     for(let char of s){
//         map.set(char, (map.get(char) || 0) + 1)
//     }
//     for(let i = 0; i < s.length; i++){
//         if(map.get(s[i]) === 1){
//             return i
//         }
//     }
//     return -1
// }    

// solution 6 using pointers
var firstUniqChar = function(s) {
    let left = 0, right =1
    while(left < s.length){
        console.log(left,right,"===")
        if(s[left] === s[right]){
            left++
            right = 0
            if(left === right){
                right = left+1
            }
        }else{
            right++
            if(left === right){
                right = left+1
            }
            if(right===s.length){
                return left
            }
        }
    }
    return -1
}
// ------------------------------------------



// test Case

console.log(firstUniqChar('leelcode'))  // 4
console.log(firstUniqChar('leetcode'))  // 0
console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1

