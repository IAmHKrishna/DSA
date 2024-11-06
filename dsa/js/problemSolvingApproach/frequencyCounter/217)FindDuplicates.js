// Problem: Given an array of integers, check if any value appears at least twice.


function containsDuplicate(arr){ 
    let frequencyCounter ={}
    for(let val of arr){
        if(frequencyCounter[val]){
            return true
        }
        frequencyCounter[val]= 1
    }
    return false

}




// function containsDuplicate(arr){  // return unique arr from duplicate
//     let frequencyCounter ={}
//     for(let val of arr){
//         frequencyCounter[val]= ++frequencyCounter[val]||1
//     }

// return Object.keys(frequencyCounter).map(n=>Number(n))
// }



// Alternative solution
// function containsDuplicate(nums) {
//     const seen = new Set();
//     for (let num of nums) {
//         if (seen.has(num)) {
//             return true; // Duplicate found
//         }
//         seen.add(num);
//     }
//     return false; // No duplicates found
// }

// test cases

console.log(containsDuplicate([1,2,3,1]))     // true
console.log(containsDuplicate([1,2,3,4]))     // false
console.log(containsDuplicate([1,1,1,3,3,4])) // true