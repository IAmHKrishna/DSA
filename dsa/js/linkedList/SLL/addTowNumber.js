// You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        console.log(sum,"====11")

        let digit = sum % 10;
        console.log(digit,"====")
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(digit);
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
};
// // case 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// // case 2
// l1 = new ListNode(0);
// l2 = new ListNode(0);
// case 3
// let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
// let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
let result = addTwoNumbers(l1, l2)
let resArr = [];
while (result) {
    resArr.push(result.val);
    result = result.next;
}
console.log(resArr); 