// 1->2->3->4->5
// k = 1: 5->1->2->3->4
// k = 2: 4->5->1->2->3
const { ListNode, makeList } = require('./创建单链表');
let list = makeList([1]);

var rotate = function (head, k) {
  if (!head || !head.next) return head;

  while (k--) {
    // 找到尾结点和尾结点的前驱结点
    let pre = head,
      cur = pre.next;
    while (cur.next) {
      pre = cur;
      cur = cur.next;
    }
    // cur就是尾结点，pre是尾结点的前驱结点
    // 旋转
    cur.next = head;
    pre.next = null;
    head = cur;

    list.head = cur;
    list.print();
  }
};

rotate(list.head, 10);
// list.print();
