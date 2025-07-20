class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2){
        console.log("list",JSON.stringify(this.adjacencyList), vertex1, vertex2)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!==vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!==vertex1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let connectedVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,connectedVertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfsRecursive(start){
        let result = [];
        let visited = {};
       // console.log(this.adjacencyList)
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            console.log("vertex",vertex)
            //if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        return result
    }
    dfsIterative(start){
        let result = [];
        let stack = [start]
        let visited = {};
        visited[start] = true;
        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                } 
                
            })
        }
        return result
    }
    bfs(start){
        let result = [];
        let queue = [start]
        let visited = {};
        visited[start] = true;
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].reverse().forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                } 
                
            })
        }
        return result
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
