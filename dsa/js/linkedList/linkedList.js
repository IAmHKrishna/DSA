class LinkedList {
        constructor() {
            this.head = null;
        }

        print() {
            let current = this.head;
            const elements = [];
            while (current !== null) {
                elements.push(current.value);
                current = current.next;
            }
            console.log(elements.join(' -> '));
        }

        reverse() {
            let current = this.head;
            let prev = null;
            while (current !== null) {
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
        }
        
        delete(value) {
            let current = this.head;
            let prev = null;
            while (current !== null) {
                if (current.value === value) {
                    if (prev === null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    return;
                }   
                prev = current;
                current = current.next;
            }
        }

        search(value) {
            let current = this.head;
            while (current !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        }   

        length() {
            let current = this.head;
            let length = 0;
            while (current !== null) {
                length++;
                current = current.next;
            }
            return length;
        }   

        getHead() {
            return this.head;
        }

        getTail() {
            let current = this.head;
            while (current !== null && current.next !== null) {
                current = current.next;
            }
            return current;
        }   

        append(value) {
            const node = {
                value,
                next: null
            };
            if (!this.head) {
                this.head = node;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
        }   

        prepend(value) {
            const node = {
                value,
                next: this.head
            };
            this.head = node;
        }       

        reverse() {
            let current = this.head;
            let prev = null;
            while (current !== null) {
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
        }
    }

    const ll = new LinkedList()

    ll.append(10)
    ll.append(20)
    ll.append(7)
    ll.append(1)
    ll.append(21)

    ll.append(44)

    ll.prepend(5)
    console.log(ll.length())
    console.log(ll.getHead())
    console.log(ll.getTail())

    console.log(JSON.stringify(ll))

    // Insertion/Deletion at the Beginning: O(1)
// Insertion/Deletion at the End: O(n) — Due to traversal to the end
// Searching/Accessing an Element: O(n)
