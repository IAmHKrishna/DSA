class ListNode {
    constructor(val=null, next = null) {
        this.val = val;
        this.next = next;
    }
}


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let curr =dummy
    if(list1===null && list2===null){
        return null
    }
    while(list1 ||list2){
        console.log(list1?.val,list2?.val)
        if(list2?.val>list1?.val){
            curr.next=new ListNode(list1.val)
            curr = curr.next;
            list1=list1.next
        }
        if(list1?.val>list2?.val){
            curr.next=new ListNode(list2.val)
            curr = curr.next;
            list2=list2.next
        }
        if(list2?.val===list1?.val){
            curr.next=new ListNode(list1.val)
            curr = curr.next;
            curr.next=new ListNode(list2.val)
            curr = curr.next;
            list1=list1.next
            list2=list2.next
        }
        if((list1===null||list1?.val===null)&&!isNaN(list2?.val)){
            curr.next=new ListNode(list2.val)
            curr = curr.next;
            list2=list2.next
            list1=null
        }
        if((list2===null||list2?.val===null)&&!isNaN(list1?.val)){
            curr.next=new ListNode(list1?.val)
            curr = curr.next;
            list1=list1.next
            list2=null
        }
        if(list1?.val===null){
            list1=null
        }
        if(list2?.val===null){
            list2=null
        }
        
    }
    return dummy.next
};
// case 1
// let l1 = new ListNode(0, new ListNode(2, new ListNode(4)));
// let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// case 2
// let l1 = new ListNode()
// let l2 = new ListNode(0)
// case 3
// let l1 = new ListNode()
// let l2 = new ListNode()

// case 4  [-10,-6,-6,-6,-3,5]
//  let l1 = new ListNode(-10, new ListNode(-6, new ListNode(-6, new ListNode(-6, new ListNode(-3, new ListNode(5))))));
// let l2 = new ListNode();

// case 5 [-10,-9,-6,-4,1,9,9],[-5,-3,0,7,8,8] expected [-10,-9,-6,-5,-4,-3,0,1,7,8,8,9,9]
let l1 = new ListNode(-10, new ListNode(-9, new ListNode(-6, new ListNode(-4, new ListNode(1, new ListNode(9, new ListNode(9)))))));
let l2 = new ListNode(-5, new ListNode(-3, new ListNode(0, new ListNode(7, new ListNode(8, new ListNode(8))))));

// case 6 [-4,1,3,3,4,5],[-2,0,3,4]
// let l1 = new ListNode(-4, new ListNode(1, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))));
// let l2 = new ListNode(-2, new ListNode(0, new ListNode(3, new ListNode(4))));

// case 7 [],[] expected []
// let l1 = new ListNode();
// let l2 = new ListNode();
let result = mergeTwoLists(l1, l2)
console.log(result)
let resArr = [];
while (result) {
    resArr.push(result.val);
    result = result.next;
}
console.log(resArr); 