class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

var removeNthFromEnd = function(head, n) {
    
};

// case 1
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

let l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
let result = removeNthFromEnd(l1, 2)

let resArr = [];
while (result) {
    resArr.push(result.val);
    result = result.next;
}
console.log(resArr);