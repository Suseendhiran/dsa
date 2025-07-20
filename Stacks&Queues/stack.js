class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
}
 class Stack{
   constructor(){
     this.first = null;
     this.last = null;
     this.size = 0;
   }
   push(val){
     let newNode = new Node(val)
     if(!this.size){
       this.first = newNode;
       this.last = newNode;
     }else{
       let temp = this.first;
       this.first = newNode;
       newNode.next = temp;
     }
     this.size++;
     return this
   }
   pop(){
     if(!this.first) return null;
     let temp = this.first;
     if(!this.first.next){ // for last node
       this.last = null
     }
     this.first = this.first.next;
     this.size--;
     return temp
   }
 }

let stack = new Stack()
stack.push("third")
stack.push("Second")
stack.push("First")
