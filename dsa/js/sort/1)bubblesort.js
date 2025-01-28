// Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Sorted array:", bubbleSort(arr));
// if array is asc sorted then time complexity will be bast case O(n)
// if array is random then time complexity will be bast case O(n2)
// if array is desc sorted then time complexity will be worst case O(n2)
// space complexity O(1)



// ========================
function bubbleSort2(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}


// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort2(array));
