// Find the largest and smallest element in an array.


// approch by sorting
// function findLargestNumberFromArray(arr=[]){
//     if(arr.length===0) return null
//     if(arr.length===1) return arr[0]
//     const sortArr = arr.sort((a,b)=>a-b) //Sorts in ascending order
//     console.log(arr)
//     return sortArr[sortArr.length-1]
// }


// while loop
function findSmallestNumberFromArray(arr=[]){
    if(arr.length===0) return null
    let i=0;
    let j=i+1;
    let smallest=arr[i];
    while(i<arr.length-1){
        if(arr[i]>arr[j]){
            smallest=arr[j]
        }
        i++;
        j++;
    }
    return smallest

}
function findLargestNumberFromArray(arr=[]){
    if(arr.length===0) return null
    let i=0;
    let j=i+1;
    let largest=arr[i];
    while(i<arr.length-1){
        if(arr[i]<arr[j]){
            largest=arr[j]
        }
        i++;
        j++;
    }
    return largest

}


// const arr =[6,7,3,5,2,1,4]

// console.log(findLargestNumberFromArray(arr))
// console.log(findSmallestNumberFromArray(arr))


// 1. Using JavaScript Built-in Methods
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}
// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)


// 2. Using a Single Loop (Efficient Approach)
function findMinMax(arr) {
    let min = arr[0], max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}
// ✅ Time Complexity: O(n) (single traversal)
// ✅ Space Complexity: O(1)


// 3. Using Sorting (Less Efficient)
function findMinMax(arr) {
    arr.sort((a, b) => a - b);
    return { min: arr[0], max: arr[arr.length - 1] };
}
// ❌ Time Complexity: O(n log n) (because of sorting)
// ✅ Space Complexity: O(1)

console.log(findMinMax([5, 2, 9, 1, 7, 6])); 
// Output: { min: 1, max: 9 }

