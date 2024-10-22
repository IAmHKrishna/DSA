class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.size=0;
    }

    append(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }

    // Prepend: Insert a new node at the beginning of the linked list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) {
            return;
        }
        if (this.head.val === data) {
            this.head = this.head.next
            return
        }
        let current = this.head
        while (current.next !== null) {
            if (current.next.val === data) {
                console.log(current.val)
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }


    // Search: Find an element in the linked list
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.val === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }



    // Print: Display the elements of the linked list
    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.val);

            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
    findMinValue() {
        let current = this.head;
        let min = current.val;
        while (current !== null) {
            if (current.val < min) {
                min = current.val;
            }
            current = current.next;
        }
        return min;
    }

    findminValue1() {
        let current = this.head;
        let minVal = current.val;
        while (current !== null) {

            if (minVal > current.val) {
                minVal = current.val
            }
            current = current.next
        }
        return minVal
    }
    findMaxValue() {
        let current = this.head
        let maxValue = current.val
        while (current !== null) {
            if (maxValue < current.val) {
                maxValue = current.val
            }
            current=current.next
        }
        return maxValue
    }
}

const ll = new LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.prepend(5)
ll.append(1)
ll.append(21)

ll.append(44)

// ll.prepend(5)
// ll.delete(30)
ll.print()
// console.log(ll.search(50))

console.log(ll.findminValue1())
console.log(ll.findMaxValue())

// console.log(ll,"===",JSON.stringify(ll))