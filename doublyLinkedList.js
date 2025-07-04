// your code goes here
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.length){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
      if(!this.length) return undefined;
      let tail = this.tail;
      if(this.length === 1){
        this.head = null;
        this.tail = null;
      }else{
        this.tail = this.tail.prev;
        this.tail.next = null
        tail.prev = null
      }
        this.length--
        return tail
    }
    shift(){
      if(this.length === 0) return undefined;
      let oldHead = this.head;
      if(this.length === 1){
        this.head = null;
        this.tail = null;
      }
      else{
        this.head = this.head.next;
        this.head.prev = null;
      }
      oldHead.next = null;
      this.length--;
      return oldHead
    }
    unshift(val){
      if(!this.length){
        this.push(val)
      }else{
        let newNode = new Node(val);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode
        this.length++
      }
      return this;
    }
    print(){
        let arr = [];
        let current = this.head
        while(current){
            arr.push(current.val);
            current = current.next
        }
        console.log("LIST ARRAY",arr)
    }
    get(index){
      if(!this.length) return undefined;
      if(index < 0 || index >=this.length) return undefined;
      let halfLength = Math.floor(this.length/2);
      let counter = 0;
      var current
      if(index <= halfLength){
        current = this.head;
        while(index !== counter){
          current = current.next;
          counter++
        }
      }else{
        counter = this.length - 1
        current = this.tail;
        console.log("else",counter,index)
        while(index !== counter){
          current = current.prev;
          counter--
        }
      }
      return current
    }
    set(index,val){
      let foundNode = this.get(index)
      if(foundNode){
        foundNode.val = val
        return true
      }
      
      return false
    }
    remove(index){
      if(index === this.length-1) this.pop();
      if(index === 0) this.shift();
      if(index >=this.length || index<0) return false;
      let foundNode = this.get(index);
      let preNode = foundNode.prev;
      let nextNode = foundNode.next;
      preNode.next = nextNode
      nextNode.prev = preNode
      foundNode.next = null;
      foundNode.prev = null;
      this.length--;
      return foundNode
    }
    insert(index,val){
      if(index < 0 || index >= this.length) return false
      if(index === this.length) this.push(val);
      if(index === 0) this.unshift(val);
      let newNode = new Node(val);
      let foundNode = this.get(index-1);
      console.log("insertfound",foundNode)
      if(foundNode){
        let next = foundNode.next
        foundNode.next = newNode;
        newNode.next = next
        next.prev = newNode;
        newNode.prev = foundNode;
        this.length++
        return true
      }
      return false
    }
  
}

let list = new DoublyLinkedList()
list.push("one")
list.push("two")
list.push("three")
list.push("four")
list.unshift("zero")
list.unshift("minusone")
console.log(list.print())
console.log("getNode", list.get(3))
list.set(5,"set")
list.print()
list.insert(5,"insert")
list
list.print()
list.remove(4)
// list.unshift("two")
// list.unshift("one")
// list.unshift("zero")


//list.unshift("one")
//console.log("Popped",list.pop())
