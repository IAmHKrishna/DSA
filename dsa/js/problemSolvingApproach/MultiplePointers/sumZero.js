// Write a function called sumZero which accepts a sorted array of integers.
//  The function should find the first pair where the sum is 0. 
//  Return an array that includes both values that sum to zero 
//  or undefined if a pair does not exist




function sumZero(arr){  //apply two pointers for sort array

    let left = 0
    let right = arr.length - 1

    while(left < right){

        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if(sum > 0){
            right--
        } else {
            left++
        }
    } 
}

// example 2

function sumZero(arr) {
    let i = 0
    let j = i + 1
    while (i < arr.length ) {
        let sum = arr[i] + arr[j]
        if (sum === 0) {
            return [arr[i], arr[j]]
        } else {
            if (i === arr.length - 1) {
                return
            }else if (j === arr.length - 1) {
                i = i + 1;
                j = i + 1
            } else {
                j = j + 1
            }
        }
    }
}








// cases
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined