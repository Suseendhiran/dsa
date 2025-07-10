class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(ele,priority){
        let node = new Node(ele, priority)
        this.values.push(node);
        this.bubbleUp(node)
    }
    bubbleUp(ele){
        let length = this.values.length;
        let idx = this.values.length - 1;
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(ele.priority >= parent.priority) break;
            this.values[parentIdx] = ele
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) this.values[0] = end;
        this.sinkDown();
        return min;
    }
    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        while(true){
            let element = this.values[idx];
            let swapIdx = null;
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild;
            let rightChild;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swapIdx = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swapIdx === null && rightChild.priority < element.priority) || 
                   (swapIdx && rightChild.priority < leftChild.priority)){
                    swapIdx = rightChildIdx
                }
            }
            if(swapIdx){
                 this.values[idx] = this.values[swapIdx];
                this.values[swapIdx] = element
            }
            if(swapIdx === null) break;
            idx = swapIdx
        }
    }
}

class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}

const pQueue = new PriorityQueue()
pQueue.enqueue("priority6",6);
pQueue.enqueue("priority4",4);
pQueue.enqueue("priority5",5);
pQueue.enqueue("priority7",7);
pQueue.enqueue("priority1",1);
pQueue.enqueue("priority3",3);
pQueue.enqueue("priority2",2);


