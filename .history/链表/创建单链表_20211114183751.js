/**
 * 节点的类
 */
class ListNode {
  /**
   *
   * @param {*} data 此结点存放的数据
   * @param {*} next 此结点下一个结点的引用地址
   */
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class List {
  constructor() {
    //第一个元素的引用地址 它向链表中的第一个元素
    this.head = null;
    //链表的长度 里面有几个元素
    this.size = 0;
  }
  /**
   * 在索引为index的位置 添加一个节点
   * @param {*} index
   * @param {*} listNode
   */
  add(index, listNode) {
    //判断是否要添加到索引为0的位置
    //如果index=0.添加到头的位置
    if (index == 0) {
      //让新的节点的next指向原来的头节点
      listNode.next = this.head;
      //头结点指向这个添加的节点
      this.head = listNode;
    } else {
      //获取 要插入位置 节点的前一个节点 A
      let prev = this.get(index - 1);
      //让待插入的节点的next指向前一个节点的后一个节点
      //c.next=B    B=a.next
      listNode.next = prev.next;
      //让上一个节点的next指向待插入的节点
      prev.next = listNode;
    }
    this.size++;
  }
  rangeCheck(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('索引越界');
    }
  }
  /**
   * 获取指定索引的元素结点
   * @param {*} index
   */
  get(index) {
    this.rangeCheck(index);
    //curr先指向头节点，也就是第一个元素
    //index=0,index=1
    let curr = this.head;
    while (index--) {
      curr = curr.next;
    }
    return curr;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      //获取待删除节点的前一个节点
      let prev = this.get(index - 1);
      //让prev也就是A节点的next指向待删除节点的.next
      prev.next = prev.next.next;
    }
    this.size--;
  }
  print() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.data + '=>';
      curr = curr.next;
    }
    str += 'null';
    console.log(str);
  }
}
// //创建一个链表实例
// let list = new List();
// //创建一个结点A，数据域存的A，指针域为null
// let a = new ListNode('A');
// //把a节点添加到链表中
// list.add(0, a);
// //创建一个C节点
// let c = new ListNode('C');
// //把这个C节点添加到索引为1的位置
// list.add(1, c);
// let b = new ListNode('B');
// //把这个C节点添加到索引为1的位置
// list.add(1, b);
// //删除索引为1的元素
// list.remove(1);
// let d = new ListNode('D');
// list.add(0, d);
// list.print();

function makeList(arr) {
  let list = new List();
  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    list.add(i, node);
  }
  list.print();
  return list;
}

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
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  let leftNode_pre = null,
    leftNode = null,
    leftNode_next = null,
    rightNode_pre = null,
    rightNode = null,
    rightNode_next = null;
  cur = head;

  while (cur && cur.next) {
    if (cur.val === left.val) {
      leftNode = cur;
      leftNode_next = cur.next;
    }
    if (cur.next.val === left.val) {
      leftNode_pre = cur;
      leftNode = cur.next;
      leftNode_next = cur.next.next;
    }

    if (cur.val === right.val && leftNode) {
      rightNode = cur;
      rightNode_next = cur.next;
    }
    if (cur.next.val === right.val && leftNode) {
      rightNode_pre = cur;
      rightNode = cur.next;
      rightNode_next = cur.next.next;
    }
    cur = cur.next;
  }
  console.log(leftNode, rightNode);
  if (leftNode && rightNode) {
    // left
    if (leftNode_pre) {
      leftNode_pre.next = rightNode;
    } else {
      leftNode.next = rightNode;
    }
    rightNode.next = leftNode_next;
    // right
    rightNode_pre.next = leftNode;
    rightNode.next = leftNode_next;
  }

  return head;
};

reverseBetween(list.head, 2, 4);
console.log(list.print());
