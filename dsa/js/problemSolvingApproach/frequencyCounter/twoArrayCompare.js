// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the 
// array has it's corresponding value squared in the second array.
//  The frequency of values must be the same.


// sudo code
// ==============
// 1) create the function which take two arr as arguments and  return true and false
// 2) if function return false when
//    * both arr length is different
//    * if each element of squire  of arr1 is not found in arr2 
// 3) if function return true when
//   * both arr length is same
//   * if each element of squire  of arr1 is  found in arr2 




// same as example 2
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Count the frequency of each value in arr1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // Count the frequency of each value in arr2
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Compare the frequency of squared values
    for (let key in frequencyCounter1) {
        let squared = key ** 2;
        console.log("111",squared,frequencyCounter1)

        if (!(squared in frequencyCounter2)) {

            return false;
        }
        if (frequencyCounter2[squared] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}
// example 2
// function same(arr1 = [], arr2 = []) {   // Time Complexity O(n)
//     if (!arr1 || !arr2) {
//         return false
//     }
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let arr1frequency = {}
//     let arr2frequency = {}
//     arr1.forEach(arr1Item => arr1frequency[arr1Item] ? ++arr1frequency[arr1Item] : arr1frequency[arr1Item] = 1)
//     for (let arr2Item of arr2) {
//         arr2frequency[arr2Item] = (arr2frequency[arr2Item] || 0) + 1
//     }
//     for (let arr1Item in arr1frequency) {
//         let squared = arr1Item ** 2;
//         if (!(squared in arr2frequency)) {
//             return false
//         }
//         if (arr2frequency[arr1Item ** 2] !== arr1frequency[arr1Item]) {
//             return false
//         }
//     }

//     // for (let arr1Item of arr1) {
//     //     let squared = arr1Item ** 2;
//     //     if (!(squared in arr2frequency)) {
//     //         return false
//     //     }
//     //     if (arr2frequency[arr1Item ** 2] !== arr1frequency[arr1Item]) {
//     //         return false
//     //     }
//     // }

//     return true
// }

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));  // returns true
// console.log(same([1, 2, 3, 2], [9, 1, 4, 8]));  // returns false

// example 1
// function same(arr1 = [], arr2 = []) {   // Time Complexity O(n**2)
//     if (!arr1 || !arr2) {
//         return false
//     }
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     arr1.forEach(arr1Item => {
//         const sqOfArr1ItemIndex = arr2.indexOf(arr1Item ** 2)
//         if (sqOfArr1ItemIndex === -1) {
//             return false
//         }
//         arr2.splice(sqOfArr1ItemIndex,1)
//     })


//     return true
// }





// cases
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9]))// false
console.log(same(null, [1, 9]))// false
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)