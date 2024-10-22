function heapSort(arr) {
      // Swap the root (max element) with the last element
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
         // Call heapify on the reduced heap
        heapify(arr, arr.length, i);
    }
    // Step 2: Extract elements from heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // let temp = arr[0];
        // arr[0] = arr[i];
        // arr[i] = temp;
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}   

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }   
    if (right < n && arr[right] > arr[largest]) {   
        largest = right;
    }

    if (largest != i) {
        // let temp = arr[i];
        // arr[i] = arr[largest];
        // arr[largest] = temp;
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

console.log(heapSort([10, 20, 30, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]))