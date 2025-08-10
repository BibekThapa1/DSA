class Graph{
    constructor(){
        this.adjencyList = {}
    }

    addVertex(vtx){
        if(!this.adjencyList[vtx]){
            this.adjencyList[vtx] = []
            return true;
        }
        return false;
    }

    // connection
    addEdge(vtx1,vtx2){
        if(this.adjencyList[vtx1] && this.adjencyList[vtx2]){
            this.adjencyList[vtx1].push(vtx2)
            this.adjencyList[vtx2].push(vtx1)
            return true;
        }
        return false;
    }

    removeEdge(vtx1,vtx2){
        if(this.adjencyList[vtx1] && this.adjencyList[vtx2]){
            this.adjencyList[vtx1] = this.adjencyList[vtx1].filter((a)=> a!==vtx2)
            this.adjencyList[vtx2] = this.adjencyList[vtx2].filter((a)=> a!==vtx1)
            return true;
        }
        return false;
    }

    removeVertex(vtx){
        if(!this.adjencyList[vtx]){
            return undefined;
        }

        for (let neighbour of this.adjencyList[vtx]){
            this.adjencyList[neighbour] = this.adjencyList[neighbour].filter(v => v!==vtx)
        }

        delete this.adjencyList[vtx]
        return this
    }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('A','D')
// console.log(g);
// g.removeEdge('A','B')
console.log(g);
g.removeVertex('B')
console.log(g);