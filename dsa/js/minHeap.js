class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val)
        this.heapifyUp()
    }

    heapifyUp() {
        // console.log(this.heap)
        let lastIndex = this.heap.length - 1
        let lastElement = this.heap[lastIndex]
        let parentIndex = this.getParentIndex(lastIndex)
        // console.log(lastIndex, lastElement, parentIndex)

        while (lastIndex > 0 && lastElement < this.getParentValueByIndex(parentIndex)) {
            // console.log("inside")
            this.heap[lastIndex] = this.heap[parentIndex]
            lastIndex = parentIndex
            parentIndex = this.getParentIndex(parentIndex)
        }
        this.heap[lastIndex] = lastElement
    }
    heapifyUp1() {
        let idx = this.heap.length - 1;
        const lastElement = this.heap[idx];

        while (idx > 0) {
            const parentIdx = this.getParentIndex(idx);
            const parentElement = this.heap[parentIdx];
            // const parentElement = this.getParentValueByIndex(parentIdx);

            if (lastElement >= parentElement) break;

            this.heap[idx] = parentElement;
            idx = parentIdx;
        }
        this.heap[idx] = lastElement;
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2)
    }
    getParentValueByIndex(parentIndex) {
        return this.heap[parentIndex]
    }

    print() {
        console.log(this.heap)
    }

    getMin() {
        return this.heap[0]
    }

    getSize() {
        return this.heap.length
    }
    getLeftChildIndex(idx) {
        return 2 * idx + 1
    }

    getLeftChildValueByIndex(idx) {
        return this.heap[this.getLeftChildIndex(idx)]
    }

    getRightChildIndex(idx) {
        return 2 * idx + 2
    }
    getRightChildValueByIndex(idx) {
        return this.heap[this.getRightChildIndex(idx)]
    }
    extractMin() {
        const min = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last
            this.heapifyDown()
        }
        return min
    }

   heapifyDown() {
        console.log(this.heap, "current heap")
        let idx = 0
        let firstElement = this.heap[idx]
        let heapSize = this.getSize()


        while (true) {
            let leftChildIdx = this.getLeftChildIndex(idx)
            let rightChildIdx = this.getRightChildIndex(idx)
            let swap = null
            if (leftChildIdx < heapSize) {
                const leftChild = this.heap[leftChildIdx]
                if (leftChild < firstElement) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < heapSize) {
                let rightChild = this.heap[rightChildIdx]
                if (swap === null && rightChild < firstElement) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]]
            idx = swap
        }

    }
    heapifyDown1() {
        let idx = 0;
        const length = this.heap.length;
        const firstElement = this.heap[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < firstElement) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < firstElement) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = firstElement;
            idx = swap;
        }
    }


    assignHeap(arr) {
        this.heap = arr
    }


}


const minHeap = new MinHeap();

// minHeap.insert(5);
// minHeap.insert(4)
// minHeap.insert(3);
// minHeap.insert(2);
// // minHeap.insert(5);
// minHeap.insert(1);
// minHeap.insert(8)
// minHeap.insert(6)
// minHeap.insert(7)
// minHeap.insert(9)

// minHeap.insert(0);

// console.log(minHeap.getMin())
// console.log(minHeap.getLeftChildValueByIndex(1))
minHeap.assignHeap([1,2,3,8,6,7])
console.log(minHeap.extractMin()) // minHeap.extractMin()
// minHeap.print()
console.log(minHeap)