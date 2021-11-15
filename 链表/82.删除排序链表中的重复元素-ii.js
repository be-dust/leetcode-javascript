/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
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
  if (!head) return null;
  let ret = new ListNode(-1, head);
  let pre = ret,
    cur = head;
  while (cur && cur.next) {
    if (cur.next.val !== pre.next.val) {
      cur = cur.next;
      pre = pre.next;
    } else {
      while (cur && cur.next && cur.next.val === pre.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    }
  }
  return ret.next;
};
