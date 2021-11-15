// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  let minNode = head;
  let nextNode = head;
  while (nextNode) {
    if (minNode.val > nextNode.val) {
      let tempNode = nextNode.next;
      nextNode.next = minNode;
      minNode.next = tempNode;
    }
    if (minNode.val === nextNode.val) {
      minNode.next = nextNode.next;
    }
    nextNode = nextNode.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function makeList(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(new ListNode(arr[i], arr[i + 1]));
  }
  return res;
}

console.log(makeList([1, 1, 2]));
