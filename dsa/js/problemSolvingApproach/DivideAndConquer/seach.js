// Given a sorted array of integers, write a function called search,
//  that accepts a value and returns the index where the value passed 
//  to the function is located. If the value is not found, return -1


// binary search with recursion
// time complexity O(log n)
// // space complexity 0(log n)
function search(arr, num, left = 0, right = arr.length - 1) {
    if (left > right) return -1
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === num) return mid
    else if (arr[mid] < num) return search(arr, num, mid + 1, right)
    else return search(arr, num, left, mid - 1)
}



// binary search with while loop
// time complexity O(log n)
// space complexity 0(1)


// function search(arr,num){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left<=right){
//         let mid = Math.floor((left + right) / 2);
//         if(arr[mid] === num){
//             return mid
//         } else if(arr[mid] < num){
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return -1
// }



// ====================================================================
// leaner search 

//  time complexity O(n)
//  space complexity 0(1)

// function search(arr, num) {
//     if (arr.length == 0) return -1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i
//         }
//     }
//     return -1
// }


console.log(search([5], 5) )// 0
console.log(search([2,5], 5) )// 1
console.log(search([2,5], 2) )// 0
console.log(search([1, 2, 3, 4, 5, 6], 4) )// 3
console.log(search([1, 2, 3, 4, 5, 6], 6) )// 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1