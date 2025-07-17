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
}
