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

function printGraph() {
    for (let [node, edges] of adj) {
        let connections = [];
        for (let [neighbor, weight] of edges) {
            connections.push(`${neighbor}(${weight})`);
        }
        console.log(`${node} -> ${connections.join(", ")}`);
    }
}


addEdge('A', 'B', 2, true);
addEdge('A', 'C');
addEdge('B', 'D');
addEdge('D', 'C', 3);
addEdge('C', 'E', 1, true);
addEdge('E', 'F', 1, true);
addEdge('F', 'D', 1, true);
printGraph();
console.log(adj)
console.log(hasEdge('A', 'B')); // true
removeEdge('A', 'B');
removeNode('D');
printGraph();

