


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}


// 错误版本
// var swapPairs = function (head) {
//     let dummy = new ListNode()
//     dummy.next = head
//     let pointer = head

//     while (pointer && pointer.next) {
//         // n1  n2  rest

//         let first = pointer
//         let rest = pointer.next.next

//         head = head.next  // ->
//         head.next = first
//         head.next.next = rest

//         pointer = pointer.next.next
//     }

//     return dummy.next
// };

// var swapPairs = function (head) {
//     let dummy = new ListNode()
//     dummy.next = head

//     head = dummy

//     while (head.next && head.next.next) {
//         let n1 = head.next, n2 = head.next.next
//         // head -> n1 -> n2 -> ...
//         // head -> n2 -> n1 -> ...

//         head.next = n2
//         n1.next = n2.next
//         n2.next = n1

//         head = n1
//     }

//     return dummy.next
// };

// 1 2 3 4
//

// var swapPairs = function (head) {
//     if (!head || !head.next) return head

//     let tmp = head.next

//     head.next = swapPairs(head.next.next)

//     tmp.next = head

//     return tmp
// };


const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)



console.log(l1)

console.log(swapPairs(l1))


