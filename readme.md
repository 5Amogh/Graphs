# 🌐 Graphs, BFS, and Data Structures – Learning Notes  

## 📖 What is a Graph?  
A **graph** is a data structure made of:  
- **Vertices (Nodes):** Entities (e.g., people, cities, routers).  
- **Edges:** Connections/relationships between vertices (e.g., friendships, roads, network cables).  

Graphs are everywhere: maps, social networks, computer networks, workflows, recommendation systems.  

---

## 🧾 Key Terms  
- **Degree of a node**  
  - **Undirected graph:** Degree = number of neighbors.  
  - **Directed graph:** Split into **in-degree** (incoming edges) and **out-degree** (outgoing edges).  

- **Connected Graph:** Every node is reachable from every other node.  
- **Disconnected Graph:** At least one node is isolated (no path exists to others).  

---

## 🧩 Types of Graphs  
1. **Directed vs Undirected**  
   - Directed: Edges have direction (A → B).  
   - Undirected: Edges are bidirectional (A — B).  

2. **Weighted vs Unweighted**  
   - Weighted: Each edge has a value (e.g., distance, cost).  
   - Unweighted: All edges are equal (just connections).  

3. **Connected vs Disconnected**  
   - Connected: One component.  
   - Disconnected: Multiple components.  

---

## 🗂 Representations of Graphs  
- **Adjacency List:**  
  - For each node, store a list of its neighbors (and weights if applicable).  
  - Space efficient for sparse graphs.  

- **Adjacency Matrix:**  
  - 2D matrix where `matrix[u][v]` = weight (or 1 for unweighted).  
  - Easy edge lookup but space heavy (O(V²)).  

---

## ⚙️ Graph Operations (APIs)  
- `addNode(node)` → Add a new vertex.  
- `addEdge(node1, node2, weight, directed)` → Connect nodes with an edge.  
- `removeEdge(node1, node2)` → Delete an edge.  
- `removeNode(node)` → Delete a node and all its edges.  
- `hasEdge(node1, node2)` → Check if an edge exists.  

### 🔎 Nuances
- **Adjacency list (array-based):** Must handle duplicates manually.  
- **Adjacency list (Map-based):** Cleaner — `Map.set()` automatically avoids duplicates.  

---

## 📦 Queue Data Structure (needed for BFS)  
- **Queue = FIFO (First In, First Out).**  

**Operations:**  
- `enqueue` → add to end.  
- `dequeue` → remove from front.  
- `peek` → check front element.  
- `isEmpty` → check if queue is empty.  

**Why Map-based queue?**  
- `Array.shift()` is O(n).  
- With `Map` + head/tail pointers → `enqueue` and `dequeue` are O(1).  

---

## 🔍 Breadth-First Search (BFS)  
### 📖 Definition  
- Traverses a graph **level by level**.  
- Uses a **queue**.  
- Ensures the **shortest path (in terms of edges)** in unweighted graphs.  

### 🛠 Approach  
1. Start from a node, mark as visited.  
2. Enqueue it.  
3. While queue not empty:  
   - Dequeue node.  
   - Visit all its unvisited neighbors, mark visited, enqueue them.  

### 📊 Properties  
- Time: **O(V + E)**  
- Space: **O(V)**  

---

## 🌍 Real-World Applications of BFS  
- **Social networks** → “degrees of separation” between people.  
- **Web crawlers** → visit direct links before deeper pages.  
- **Network broadcasting** → spreading messages across routers/devices.  
- **Routing in unweighted networks** → fewest hops between devices.  
- **Games/AI** → minimal moves to solve puzzles (mazes, Rubik’s cube states).  

---

## 🧭 BFS with Distance & Parent Maps  
BFS can track more than traversal order:  

- **`dist` map** → shortest distance (edge count) from start node.  
- **`parent` map** → previous node in shortest path tree.  

### 💡 Why useful?  
- `dist` gives shortest path length instantly.  
- `parent` lets you reconstruct the actual path from start → target.  

---

## 🌍 Real-World Applications of BFS with Distance  
- **Networking** → minimum hops between routers.  
- **Friend recommendations** → “2 hops away” suggestions.  
- **Urban transport** → zones by number of stops from source.  
- **Scheduling** → earliest start time for dependent tasks.  

---

## 🛤 Shortest Path Reconstruction  
- Start at target.  
- Follow `parent` links backward until reaching the start.  
- Reverse the collected path.  

### ⚡ Nuances  
- BFS ensures shortest discovery order → path is guaranteed shortest.  
- Best practice: validate that the reconstructed path ends at the `start` (handles disconnected graphs).  

---

## 🌍 Real-World Applications of Shortest Path (via BFS)  
- **Google Maps (equal-cost edges)** → shortest subway route by stops.  
- **Customer support workflows** → minimal steps to resolution.  
- **File dependencies** → shortest path between related modules.  
- **Maze/grid escape** → minimal moves to target.  

---

## ⚖️ BFS vs DFS (preview)  
- **BFS:** Level-order, Queue-based → shortest paths, connectivity.  
- **DFS:** Depth-first, Stack/Recursion → path existence, cycle detection, topological sorting.  

---

## ✅ Summary  
- Learned **graph basics**: vertices, edges, degree, types.  
- Explored **adjacency list & matrix** representations.  
- Implemented **graph operations**: add/remove nodes & edges, edge checks.  
- Built an **efficient Queue** to power BFS.  
- Implemented **BFS** (order, distance, parent tracking).  
- Learned how to **reconstruct shortest paths** using parent maps.  
- Connected concepts to **real-world scenarios**: maps, networks, social platforms, AI.  

---