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
// 思路：
// 1. 找到left位置的前驱节点front, 对应的位置是left-1
// 2. 找到要反转部分的第一个节点 frontNode = front.next
// 3. left和right之间有 right-left+1个节点，这样就找到了要反转部分的最后一个节点endNode
// 4. 找到right位置的后驱结点 end = endNode.next
// 5. 反转要反转的部分，然后front.next指向反转后的第一个节点， frontNode.next = end;

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
