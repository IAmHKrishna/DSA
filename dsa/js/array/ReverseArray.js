// Reverse an array.

// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)


// 4. Using a New Array (Extra Space)
function reverseArray(arr=[]) {
    if(arr.length===0)return [];
    let reverseArr=[]
    for(let i= arr.length-1;i>=0;i-- ){
        reverseArr.push(arr[i])
    }
    return reverseArr
}
// ✅ Time Complexity: O(n) (single traversal)
// ✅ Space Complexity: O(n) (modifies array in place)

function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap elements
        left++;
        right--;
    }
    
    return arr;
}
// ✅ Time Complexity: O(n) (single traversal)
// ✅ Space Complexity: O(1) (modifies array in place)


// 3. Using Recursion
function reverseArray(arr,left=0,right=arr.length-1) {
     if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return reverseArray(arr, left + 1, right - 1);

    
}
// ✅ Time Complexity: O(n)
// ❌ Space Complexity: O(n) (due to recursive call stack)

console.log(reverseArray1([1,2,3,4,5]))