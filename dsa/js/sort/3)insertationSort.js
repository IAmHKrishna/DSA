// The Insertion Sort algorithm uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.
// The algorithm takes one value at a time from the unsorted part of the array and puts it into the right place in the sorted part of the array, until the array is sorted.
// How it works:

// Take the first value from the unsorted part of the array.
// Move the value into the correct place in the sorted part of the array.
// Go through the unsorted part of the array again as many times as there are values.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
         console.log(key,j,"key,j")
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
let arr = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(arr));
// if array is asc sorted then time complexity will be bast case O(n)
// if array is random then time complexity will be bast case O(n2)
// if array is desc sorted then time complexity will be worst case O(n2)
// space complexity O(1)