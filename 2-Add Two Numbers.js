/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let val1 = l1 ? l1.val : 0
  let val2 = l2 ? l2.val : 0

  let node = new ListNode((val1 + val2) % 10)
  let carryBit = Math.floor((val1 + val2) / 10)
  let next = new ListNode

  l1 = l1.next
  l2 = l2.next

  if (l1 || l2 || carryBit) {
    node.next = next
  }


  while (l1 || l2 || carryBit) {
    val1 = l1 ? l1.val : 0
    val2 = l2 ? l2.val : 0

    next.val = (val1 + val2 + carryBit) % 10
    carryBit = Math.floor((val1 + val2 + carryBit) / 10)

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }

    if (l1 || l2 || carryBit) {
      next.next = new ListNode
      next = next.next
    }
  }

  return node
};

// [2,4,3]
// [5,6,4]

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)


console.log(addTwoNumbers(l1, l2));
