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
var addTwoNumbers = function (l1, l2) {
  let carryBit = 0,
    ans = new ListNode

  while (l1 && l2) {
    ans.val = (l1.val + l2.val + carryBit) % 10
    carryBit = Math.floor((l1.val + l2.val) / 10)

    ans = ans.next
    l1 = l1.next
    l2 = l2.next
  }

  return ans
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}
