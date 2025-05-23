// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
//  and counts the unique values in the array. There can be negative numbers 
//  in the array, but it will always be sorted.

function countUniqueValues(arr) {
    // if arr is null
    if (!arr ) return 0;
    // if array is empty then return 0
    if (arr.length === 0) return 0;
    let i = 0;
    // if array is not empty then loop through the array
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}















console.log(countUniqueValues([1,1,1,1,1,2,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues(null)) // 0
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues()) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4