class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class Dll {
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
      if(!val||isNaN(val)) return undefined
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next=newNode;
          newNode.prev=this.tail;
         this.tail=newNode;
      }
      this.length++
      return this;
    }
    
}

let dll = new Dll()

dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)
const data = JSON.stringify(dll)
console.log(data,"---")