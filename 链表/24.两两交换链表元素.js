// 1->2->3->4->5
// 2->1->4->3->5

const { ListNode, makeList } = require('./创建单链表');
let list = makeList([1, 2, 3, 4]);

var swapPairs = function (head) {
  if (!head) return head;

  let k = 0,
    pre = head,
    cur = pre.next,
    lastEnd = null; // 上一个分组交换后的第二个元素

  while (cur) {
    let temp = cur.next,
      front = pre,
      end = cur;

    end.next = front;
    front.next = temp;
    if (lastEnd) {
      lastEnd.next = end; // 指向当前循环内的分组交换后的第一个元素
    }
    if (k === 0) {
      list.head = end;
    }

    if (!temp) {
      break;
    }
    pre = temp;
    cur = temp.next;
    lastEnd = front;
    k++;
  }
  return list.head;
};

swapPairs(list.head);
list.print();
