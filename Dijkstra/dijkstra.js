class NaivePriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

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
        this.val = value;
        this.priority = priority;
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    dijkstra(start, finish){
        let distances = {}; //holds shortest distance of vertices with start value
        let previous = {}; //holds shortest prev node respective to start
        let nodes = new PriorityQueue(); //used to calculate from shortest distance
        let smallest;
        let path = []
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }
        console.log("init",JSON.stringify(nodes))
        //as long as anything in queue
        while(nodes.values.length){
            console.log("prev",JSON.stringify(previous))
            console.log("queue",nodes)
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                console.log("finish",smallest,finish,previous)
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }else{
                 if(smallest){
                    for(let neighbor in this.adjacencyList[smallest]){
                        let nextNode = this.adjacencyList[smallest][neighbor];
                        let candidate = distances[smallest] + nextNode.weight;
                        let nextNeighbor = nextNode.node
                        if(candidate < distances[nextNeighbor]){
                            distances[nextNeighbor] = candidate;
                            previous[nextNeighbor] = smallest;
                            nodes.enqueue(nextNeighbor, candidate)
                        }
                    }
                 }   
            }
        }
        return path.concat(smallest).reverse();   
    }
     Dijkstra(start, finish){
        const nodes = new PriorityQueue();
         console.log("nodesqueue",nodes)
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){

            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }

}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra("A", "E");

