class Queue {
  constructor(n) {
    this.arr = new Array(n);
    this.size = 0; // 元素个数
    this.length = 0;
    this.front = 0;
    this.tail = 0;
  }
}
Queue.prototype.enqueue = function (val) {
  if (this.full()) return;
  this.arr[this.tail] = val;
  this.tail = ++this.tail % this.arr.length;
  // if (this.tail === this.arr.length) {
  //   this.tail = 0;
  // }
  this.size++;
};
Queue.prototype.dequeue = function () {
  if (this.empty()) return;
  this.front = ++this.front % this.arr.length;
  this.size--;
  return this.arr[this.front];
};
Queue.prototype.front = function () {
  if (this.empty()) return;
  return this.arr[this.head];
};
Queue.prototype.full = function () {
  return this.size === this.arr.length;
};
Queue.prototype.empty = function () {
  return this.size === 0;
};
Queue.prototype.size = function () {
  return this.size;
};
Queue.prototype.clear = function () {
  this.front = this.tail = this.size = 0;
};
Queue.prototype.output = function () {
  let temp = [];
  for (let i = 0, j = this.front; i < this.size; i++) {
    temp.push(this.arr[j]);
    j++;
    if (j === this.arr.length) {
      j = 0;
    }
  }
  return temp;
};

const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// queue.dequeue();
console.log(queue.output());
console.log(queue.front, queue.tail);
