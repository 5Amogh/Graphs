//This is an undirected graph, here is the adjacency list
// A: [B, C]
// B: [A, D, E]
// C: [A, F]
// D: [B]
// E: [B, F]
// F: [C, E]
import Queue from './queue.js';

let adj = new Map();

function addNode(node) {
    if (!adj.has(node)) {
        adj.set(node, new Map());
    }
}

function addEdge(node1, node2, weight = 1, isDirected = false) {
    addNode(node1);
    addNode(node2);
    adj.get(node1).set(node2, weight); // Add or update
    if (!isDirected) {
        adj.get(node2).set(node1, weight);
    }
}

function hasEdge(node1, node2) {
    return adj.has(node1) && adj.get(node1).has(node2);
}

function removeEdge(node1, node2) {
    if (adj.has(node1)) {
        adj.get(node1).delete(node2);
    }
}

function removeNode(node) {
    if (!adj.has(node)) return;

    adj.delete(node);

    for (let [key, edges] of adj) {
        edges.delete(node);
    }
}


// Complexity
// Time: O(V + E)
// Space: O(V) for queue/visited

function bfs(startNode){
    if(!adj.has(startNode)){
        console.log(`${startNode} does not exists in the graph`);
        return [];
    }
    const queue = new Queue();
    const visited = new Set();
    const order = []

    queue.enqueue(startNode);
    visited.add(startNode);

    while(!queue.isEmpty()){
        const currentNode = queue.dequeue();
        order.push(currentNode)
        const neighbors = adj.get(currentNode)
        for(const edge of neighbors.keys()){
            if(!visited.has(edge)){
                queue.enqueue(edge);
                visited.add(edge)
            }
        }
    }

    console.log(`The BFS order for ${startNode} is`, order);
    return order;
}

function bfsWithDistance(startNode){
     if(!adj.has(startNode)){
        console.log(`${startNode} does not exists in the graph`);
        return [];
    }
    const visited = new Set();
    const queue = new Queue();
    const order = [];
    const dist = new Map([[startNode,0]]);
    const parent = new Map([[startNode, null]]);

    queue.enqueue(startNode);
    visited.add(startNode);

    while(!queue.isEmpty()){
        const currentNode = queue.dequeue();
        order.push(currentNode);
        const neighbors = adj.get(currentNode);
        for(let edge of neighbors.keys()){
            if(!visited.has(edge)){
                visited.add(edge);
                dist.set(edge, dist.get(currentNode) + 1);
                parent.set(edge, currentNode);
                queue.enqueue(edge);
            }
        }
    }

    return {order, dist, parent}
}

function printGraph() {
    for (let [node, edges] of adj) {
        let connections = [];
        for (let [neighbor, weight] of edges) {
            connections.push(`${neighbor}(${weight})`);
        }
        console.log(`${node} -> ${connections.join(", ")}`);
    }
}

addEdge('A', 'B');
addEdge('A', 'C');
addEdge('B', 'D');
addEdge('B', 'E');
addEdge('C', 'F');
addEdge('E', 'F');
addEdge('G','A');

bfs('A');

const { order, dist, parent } = bfsWithDistance('A');

console.log("Order:", order);
console.log("Distances:", dist);
// for (let [node, d] of dist) {
//   console.log(`  ${node}: ${d}`);
// }

console.log("Parents:",parent);
// for (let [node, p] of parent) {
//   console.log(`  ${node}: ${p}`);
// }

//Start at the target, walk back through its parents until you reach the start, then flip the list.

function shortestPath(start, target, parent){
    const path = [];
    let node = target;
    while( node !== null && node !== undefined){
        path.push(node);
        node = parent.get(node);
    }

    // If the chain doesn’t end at start, target was unreachable
    if(path[path.length - 1] !== start){
        return []
    }

   return path.reverse()
}

console.log("Shortest path from A to F:", shortestPath('A', 'F', parent));
// [ 'A', 'C', 'F' ]