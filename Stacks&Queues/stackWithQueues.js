
class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
 
  push(val) {
    this.q1.enqueue(val); // Always add new elements to q1
    return this;
  }
 
  pop() {
    while (this.q1.size > 1) { // Move all but the last element from q1 to q2
      this.q2.enqueue(this.q1.dequeue());
    }
    let removed = this.q1.dequeue(); // The last element remaining in q1 is the one to pop
    [this.q1, this.q2] = [this.q2, this.q1]; // Swap q1 and q2
    return removed;
  }

 
  push2(val) {
    this.q2.enqueue(val);
    while (this.q1.size > 0) {
      this.q2.enqueue(this.q1.dequeue());
    }
    [this.q1, this.q2] = [this.q2, this.q1];
    return this;
  }
 
  pop2(val) {
    let removed = this.q1.dequeue();
    return removed;
  }
}
 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
 
  enqueue(data) {
    var node = new Node(data);
 
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
 
    return ++this.size;
  }
 
  dequeue() {
    if (!this.first) return null;
 
    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
