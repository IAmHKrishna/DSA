class Node {
    constructor(val) {
        this.val=val;
        this.next=null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head1=null;
        this.head=null;
        this.tail=null
        this.length=0
    }

    insertEnd(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=this.head
        } else {
            console.log(this.tail,"====================",this.head)
            this.tail.next = newNode;
            // this.tail=newNode;
            console.log(this.head,"+++++")
        }
        this.length++
        return this
    }
}

var singlyLL = new SinglyLinkedList()