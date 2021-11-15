import { makeList } from './创建单链表';

let list = makeList([1, 2, 3, 4, 5]);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 1->2->3->4->5->6
// 1->5->4->3->2->6
var reverseBetween = function (head, left, right) {
  if (!head || left >= right) return head;

  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let tmp = cur.next;
    cur.next = pre;
    return reverse(cur, tmp);
  };

  return head;
};

reverseBetween(list.head, 2, 4);
console.log(list.print());
