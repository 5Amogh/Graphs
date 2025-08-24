Graphs, BFS, and Data Structures – Learning Notes

📌 What is a Graph?

A graph is a data structure made of:

Vertices (Nodes): Entities (e.g., people, cities, routers).

Edges: Connections/relationships between vertices (e.g., friendships, roads, network cables).

Graphs are everywhere: maps, social networks, computer networks, workflows, recommendation systems.

📌 Key Terms

Degree of a node: Number of edges connected to it.

Undirected graph: Degree = number of neighbors.

Directed graph: Split into in-degree (incoming edges) and out-degree (outgoing edges).

Connected Graph: Every node is reachable from every other node.

Disconnected Graph: At least one node is isolated (no path exists to others).

📌 Types of Graphs

Directed vs Undirected

Directed: Edges have direction (A → B).

Undirected: Edges are bidirectional (A — B).

Weighted vs Unweighted

Weighted: Each edge has a value (e.g., distance, cost).

Unweighted: All edges are equal (just connections).

Connected vs Disconnected

Connected: One component.

Disconnected: Multiple components.

📌 Representations of Graphs

Adjacency List:

For each node, store a list of its neighbors (and weights if applicable).

Space efficient for sparse graphs.

Adjacency Matrix:

2D matrix where matrix[u][v] = weight (or 1 for unweighted).

Easy edge lookup but space heavy (O(V²)).

📌 Graph Operations (APIs we designed)

addNode(node): Add a new vertex.

addEdge(node1, node2, weight, directed): Connect nodes with an edge.

removeEdge(node1, node2): Delete an edge.

removeNode(node): Delete a node and all its edges.

hasEdge(node1, node2): Check if an edge exists.

Important Nuances:

With adjacency list (array-based): need to check duplicates manually.

With adjacency list (Map-based): duplicate edges are avoided automatically since Map.set() overwrites.

📌 Queue Data Structure (needed for BFS)

Queue = FIFO (First In, First Out).

Operations:

enqueue: add to end.

dequeue: remove from front.

peek: check front element.

isEmpty: check if queue is empty.

Why we used Map for queue:

Array.shift() is O(n).

Using Map with head/tail pointers makes enqueue and dequeue O(1).

📌 BFS (Breadth-First Search)
Definition

Traverses a graph level by level.

Uses a queue to maintain order.

Ensures the shortest path (in terms of edges) in unweighted graphs.

Approach

Start from a node, mark as visited.

Enqueue it.

While queue not empty:

Dequeue node.

Visit all its unvisited neighbors, mark visited, enqueue them.

BFS Key Properties

Time Complexity: O(V + E) (each vertex & edge processed once).

Space Complexity: O(V) (queue + visited).

📌 Real-World Applications of BFS

Social networks

Find “degrees of separation” (shortest chain of friends between two people).

Example: You are 2 hops away from a friend-of-a-friend.

Web crawling

BFS ensures all pages at “level 1” (direct links) are visited before deeper ones.

Broadcasting in networks

A message sent to a node is passed level by level to all reachable nodes.

Routing in unweighted networks

BFS finds the fewest hops between routers or devices.

AI & Games

BFS finds the shortest sequence of moves in puzzles (e.g., Rubik’s cube states, chess moves in an unweighted state graph).

📌 BFS with Distance and Parent Maps

Standard BFS enhanced with:

dist map: distance (shortest edge count) from start node to each node.

parent map: previous node in the shortest path tree.

Why they matter

dist: quickly tells you shortest path length.

parent: allows reconstruction of the actual path from start → target.

📌 Real-World Applications of BFS with Distance

Finding minimum hops in networks

Example: shortest number of hops from one router to another.

Friend recommendation systems

“You may know” suggestions often depend on distance = 2.

Urban planning / transport

BFS levels represent zones: all stops 1 hop away, 2 hops away, etc.

Task scheduling

Shortest distance from a starting task tells how early a step can begin.

📌 Shortest Path Reconstruction

Using the parent map:

Start at target.

Follow parent links back to the start.

Reverse the collected nodes → shortest path.

Nuance

BFS guarantees the first time a node is discovered is via the shortest path.

That’s why parent gives you a correct path without needing dist.

Best practice: also check the final node is start (for disconnected graphs).

📌 Real-World Applications of Shortest Path via BFS

Google Maps (when all edges are equal cost)

Example: finding shortest path in a subway system where each line = 1 hop.

Customer support workflows

Finding the minimal steps needed to resolve an issue.

File or folder search

Finding shortest path between two related files (dependencies).

Escape problems in grids/mazes

BFS finds the minimal steps to escape a maze or reach a target cell.

📌 BFS vs DFS (preview for next step)

BFS: Level by level, uses queue → good for shortest path, connectivity, bipartite check.

DFS: Depth by depth, uses stack or recursion → good for path existence, cycle detection, topological sort.

✅ Summary

We built graph fundamentals: vertices, edges, degree, types.

Learned adjacency list & matrix representations.

Built graph operations (addNode, addEdge, removeEdge, removeNode, hasEdge).

Implemented a queue (O(1) enqueue/dequeue).

Implemented BFS for traversal, distances, and path reconstruction.

Understood how dist and parent maps enhance BFS.

Connected BFS to real-world problems like maps, social networks, networks, and puzzles.