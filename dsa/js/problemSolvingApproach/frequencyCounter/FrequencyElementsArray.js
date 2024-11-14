// Frequency of Elements in an Array
// Problem: Count the frequency of elements in an array and return the result.


function frequencyCounter(arr){
    let freqObj ={}
    for(let num of arr ){
        freqObj[num]=(freqObj[num]||0)+1
    }
    return freqObj
}



// test cases
console.log(frequencyCounter([1, 2, 3, 2, 1, 3, 1]))
// Output: { 1: 3, 2: 2, 3: 2 }
