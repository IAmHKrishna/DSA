// Character Frequency Sorting
// Problem: Sort a string based on the frequency of characters.

function frequencySort(str){
    let frequencyCounter ={}
    for(let val of str){
        frequencyCounter[val]= ++frequencyCounter[val]||1
    }
    for(let val in frequencyCounter){
        console.log(val,"sdfsdf")
    }
    console.log(frequencyCounter)
}

// Test cases
frequencySort("tree") 
// Output: "eetr" or "eert"
