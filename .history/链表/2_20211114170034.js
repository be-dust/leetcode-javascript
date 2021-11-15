class List {
  constructor(head, value) {
    this.data = []; //结点的数据
    this.next = []; //此节点的下一个结点的索引
    this.head = head; //记录着头元素的索引
    this.data[head] = value; //头元素的值或者说数据
  }
  /**
   * 添加节点
   * @param {*} index 哪个索引的位置添加节点
   * @param {*} nextIndex 添加的节点的所在的索引
   * @param {*} value 添加的节点对应的值
   */
  add(index, nextIndex, value) {
    //数组中index这个索引对应的值是当前索引节点的下一个结点的下标
    this.next[index] = nextIndex;
    this.data[nextIndex] = value;
  }
  print() {
    let curr = this.head;
    let str = '';
    while (curr !== undefined) {
      str += this.data[curr] + '=>';
      curr = this.next[curr];
    }
    str += 'null';
    console.log(str);
  }
}
//使用索引为2表示链表的头部
//故意 不用0，因为我想证明存储空间是无序的，我可以用任何一个地位表示头部
/* let head = 2;
let list = new List(head, 'A');
list.add(head, 4, 'B');
list.add(4, 6, 'C');
list.add(6, 0, 'D');
list.print(); */

let head = 0;
let list = new List(head, 'A');
list.add(head, 1, 'B');
list.add(1, 2, 'C');
list.add(2, 3, 'D');
console.log(list.next);
console.log(list.data);
list.print();
