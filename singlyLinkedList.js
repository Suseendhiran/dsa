// your code goes here
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
const node = new Node("one")
console.log(node)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current
    }
}

const list = new SinglyLinkedList()
list.push("one")
list.push("two")
list.push("three")

console.log("Popped",list.pop())
console.log("Popped",list.pop())
console.log("Popped",list.pop())
console.log("Popped",list.pop())

console.log("list",JSON.stringify(list))
