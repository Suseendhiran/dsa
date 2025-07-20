class BinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(ele){
        this.values.push(ele);
        this.bubbleUp(ele)
    }
    bubbleUp(ele){
        let length = this.values.length;
        let idx = this.values.length - 1;
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(ele <= parent) break;
            this.values[parentIdx] = ele
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
    getMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) this.values[0] = end;
        this.sinkDown();
        return max;
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
                if(leftChild > element){
                    swapIdx = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swapIdx === null && rightChild > element) || 
                   (swapIdx && rightChild > leftChild)){
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

const heap = new BinaryHeap()
heap.insert(50);
heap.insert(36);
heap.insert(23);
heap.insert(78);
heap.insert(34);
heap.insert(30);
heap.insert(25);

  //      76
  //   50     30
  // 36   34 23  25

