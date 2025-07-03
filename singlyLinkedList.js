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
    shift(){
        if(!this.head) return undefined;
        let currentNode = this.head;
        this.head = this.head.next;
        currentNode.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return currentNode
    }
    unshift(val){
        if(!this.head){
            this.push(val)
        } else{
           let newNode = new Node(val);
           newNode.next = this.head;
           this.head = newNode;
           this.length++;
        }
    }
    get(index){
        if(index<0 || index>=this.length) return undefined
        let current = this.head;
        let counter = 0;
        while(counter!=index){
            current = current.next;
            counter++
        }
        return current
    }
    set(val,index){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return "Value set"
        }
        return "Invalid Index"
    }
    insert(val,index){
        if(index === 0 ) {
            this.unshift(val)
            return true
        }
        if(index === this.length) {
            this.push(val)
            return true
        }
        let newNode = new Node(val)
        let pre = this.get(index-1)
        //pre.next = newNode; // which will cut the connection
        newNode.next = pre.next
        pre.next = newNode
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0 ) unshift(val);
        if(index+1 === this.length) pop();
        let pre = this.get(index-1);
        let removedNode = pre.next;
        pre.next = removedNode.next
        this.length--
        return removedNode
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
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null
        var next;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
}

const list = new SinglyLinkedList()
list.push("one")
list.push("two")
list.push("three")

//console.log("Popped",list.pop())
console.log("Shift",list.shift())
list.shift()
list.shift()
list.push("new")
list.unshift("unshift")
list.unshift("unshift2")
console.log("getval",list.get(2))
//console.log("list",JSON.stringify(list))
list.insert("insert",2)
console.log("list",JSON.stringify(list))

console.log("list",JSON.stringify(list))
list.print()
list.reverse()
list.print()
// console.log(list.set("setter",200))

