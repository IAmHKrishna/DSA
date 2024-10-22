// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         console.log(mid,"mid")
//         if (arr[mid] === target) {
//             return mid
//         } else if (arr[mid] < target) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return -1
// }


// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))



function recursiveBinarySearch(arr, left, right, target) {
    if (left > right) {
        return -1;  // Base case: Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;  // Target found
    } else if (target < arr[mid]) {
        return recursiveBinarySearch(arr, left, mid - 1, target);  // Search in the left half
    } else {
        return recursiveBinarySearch(arr, mid + 1, right, target);  // Search in the right half
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 6))