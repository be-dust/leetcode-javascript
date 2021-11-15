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

function makeList(arr) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let arr_node = [],
    res = [];
  for (let i = 0; i < arr.length; i++) {
    arr_node.push(new ListNode(arr[i]));
  }
  for (let i = 0; i < arr_node.length; i++) {
    arr_node[i].next = arr[i + 1];
  }
  return res;
}

let list1 = makeList([1, 1, 2]);
console.log(list1);
// console.log(deleteDuplicates(list1));
