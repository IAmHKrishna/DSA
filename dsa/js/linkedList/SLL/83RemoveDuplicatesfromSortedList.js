
function ListNode(val, next=null) {
    this.val=val
    this.next=next
}

var deleteDuplicates = function(head) {
    let current = head;
    let nextNode = current.next
    while(nextNode){
        if(current.val === nextNode.val){
           current.next = nextNode.next
            nextNode = nextNode.next
        }else{
            current.next = nextNode
            current = current.next
            nextNode = nextNode.next
        }

    }
    return head
};
// case 1 [1,1,2]
// let l1 = new ListNode(1, new ListNode(1, new ListNode(2)));
// case 2 [1,1,2,3,3]
 let l1 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
let result = deleteDuplicates(l1)

let resArr = [];
while (result) {
    resArr.push(result.val);
    result = result.next;
}
console.log(resArr);