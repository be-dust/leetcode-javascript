class Queue {
  constructor(n) {
    this.arr = new Array(n);
    this.size = 0;
    this.length = 0;
    this.front = 0;
    this.tail = 0;
  }
}
Queue.prototype.enqueue = function (val) {
  if (this.full()) return;
  this.arr[this.tail] = val;
  this.tail++;
};
Queue.prototype.dequeue = function () {
  if (this.empty()) return;
  this.front++;
  return this.arr[this.front];
};
Queue.prototype.front = function () {
  if (this.empty()) return;
  return this.arr[this.head];
};
Queue.prototype.full = function () {
  return this.tail === this.arr.length;
};
Queue.prototype.empty = function () {
  return this.tail === 0;
};
Queue.prototype.size = function () {
  return this.tail - this.head; // tail指向最后一个元素的下一个空位
};
Queue.prototype.output = function () {
  return this.arr.slice(this.front, this.tail);
};

const queue = new Queue(10);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.output());
console.log(queue.front, queue.tail);
