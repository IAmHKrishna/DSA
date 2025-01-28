// The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        console.log(minIndex)
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

            // [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }

        // if(i!=minIndex){
        //     const temp = arr.splice(minIndex,1)
        //      arr.splice(i, 0,temp[0])
        // }
    }
    return arr;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(arr));
// time complexity O(n2)
// space complexity O(1)