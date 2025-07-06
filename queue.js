class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(!this.size){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode
    }
    this.size++
    return this
  }
  dequeue(){
    if(!this.size) return null;
    let temp = this.first
    if(this.last == this.first){
      this.last = null;
    }
    this.first = this.first.next
    this.size--
    return temp.val
  }
}

let queue = new Queue()
queue.enqueue("one")
queue.enqueue("two")
queue.enqueue("three")
