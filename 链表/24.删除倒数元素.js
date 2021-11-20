const { ListNode, makeList } = require('./创建单链表');
let list = makeList([1, 2]);

var removeNthFromEnd = function (head, n) {
  if (!head || n <= 0) return head;

  let len = 0,
    p = head;

  while (p) {
    len++;
    p = p.next;
  }

  if (n > len) {
    return head;
  }

  if (n === len) {
    list.head = head.next;
    return head.next;
  }

  let k = len - n;

  let dummyNode = new ListNode();
  dummyNode.next = head;
  p = dummyNode;

  while (k--) {
    p = p.next;
  }
  let front = p;
  let end = p.next.next;
  front.next = end;
  return head;
};

removeNthFromEnd(list.head, 2);
list.print();
