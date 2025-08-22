let adj = {}

function addNode(node){
    if(!adj[node]){
        adj[node] = [];
    }
}

function appendEdge(node1,node2, weight = 1){
   let foundEdge = false;

   for(let i = 0; i < adj[node1].length; i++){
        if(adj[node1][i].node == node2){
            adj[node1][i].weight = weight;
            foundEdge = true;
            break;
        }
   }

   if(!foundEdge){
    adj[node1].push({node : node2, weight: weight});
   }

}


function addEdge(node1, node2, weight = 1, isDirected = false){
    addNode(node1);
    addNode(node2);
    appendEdge(node1, node2, weight);
    if(!isDirected){
        appendEdge(node2, node1, weight);
    }
}

function hasEdge(node1, node2){
  return adj[node1].some( edge => edge.node == node2)
}

// function removeEdge(fromNode, nodeToBeRemoved){
//     if(!adj[fromNode]){
//         console.log(`Node ${fromNode} does not exist`)
//         return
//     }

//     let getIndex = -1;
//      for(let i = 0; i < adj[fromNode].length; i++){
//         if(adj[fromNode][i].node == nodeToBeRemoved){
//             getIndex = i;
//             break;
//         }
//     }
//     if(getIndex >= 0){
//         adj[fromNode].splice(getIndex,1)
//     }else{
//         console.log(`Edge does not exists between ${fromNode} and ${nodeToBeRemoved}`)
//     }
// }

//optimised
function removeEdge(fromNode, nodeToBeRemoved){
    if(!adj[fromNode]){
        console.log(`Node ${fromNode} does not exist`)
        return
    }

     adj[fromNode] = adj[node].filter( edge => edge.node !== nodeToBeRemoved)

}


//Currently, if a node had two edges to the same node (like multi-graph), only the first one gets removed.
// function removeNode(nodeToBeRemoved){
//      if(!adj[nodeToBeRemoved]){
//         console.log(`Node ${nodeToBeRemoved} does not exist`)
//         return
//     }

//     delete adj[nodeToBeRemoved];

//     for(node in adj){
//         let indexOfEdge = -1;
//         for(let i = 0; i < adj[node].length; i++){
//             if(adj[node][i].node == nodeToBeRemoved){
//                 indexOfEdge = i;
//                 break;
//             }
//         }
//         if(indexOfEdge >= 0){
//             adj[node].splice(indexOfEdge,1)
//         }
//     }
// }

//optimized, handles multi-node removal as well in case of multi-graphs
function removeNode(nodeToBeRemoved){
     if(!adj[nodeToBeRemoved]){
        console.log(`Node ${nodeToBeRemoved} does not exist`)
        return
    }

    delete adj[nodeToBeRemoved];

    for(node in adj){
        adj[node] = adj[node].filter( edge => edge.node != nodeToBeRemoved)
    }
}

addEdge('A', 'B', 2, true)
addEdge('A', 'B', 2, true) //check for duplicates
addEdge('A', 'C')
addEdge('B', 'D')
addEdge('D', 'C', 3)
addEdge('C', 'E', 1, true)
addEdge('E', 'F', 1, true)
addEdge('F', 'D', 1, true);

console.log(adj);
console.log(hasEdge('A','B'));
// removeEdge('C','A');
removeNode('D')
console.log(adj);
