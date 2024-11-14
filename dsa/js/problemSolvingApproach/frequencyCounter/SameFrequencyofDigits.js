// Problem: Write a function that takes two numbers and 
// returns true if they have the same frequency of digits.



function sameFrequency(num1,num2){
        let frequencyNum1 ={}
        for(let num of `${num1}`){
            frequencyNum1[num]=(frequencyNum1[num]||0) +1
        }
        for(let num of `${num2}`){
            if(!frequencyNum1[num]) return false
            if(frequencyNum1[num]) frequencyNum1[num] -=1
        }
        return true
}




// test cases

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14))   // false
console.log(sameFrequency(3589578, 5879385)) // true
