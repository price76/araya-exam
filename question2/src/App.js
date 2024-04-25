import Graph from "./Graph";

function App({ graph }) {
  function dfs() {
    const startNode = "A";
    const goalNode = "F";

    const visited = new Set();
    let stack = [startNode];
    visited.add(startNode);

    while (stack.length > 0) {
      const currentNode = stack.pop();
      console.log({ currentNode });
      if (currentNode === goalNode) {
        console.log(`${goalNode} has been found!`);
        return;
      }

      const destinations = graph[currentNode];

      for (const destination of destinations) {
        if (!visited.has(destination)) {
          visited.add(destination);
          stack.push(destination);
        }
      }
    }
  }

  function bfs() {
    const startNode = "A";
    const goalNode = "F";

    const visited = new Set();
    let queue = [startNode];
    visited.add(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log({ currentNode });
      if (currentNode === goalNode) {
        console.log(`${goalNode} has been found!`);
        return;
      }

      const destinations = graph[currentNode];

      for (const destination of destinations) {
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }
  }

  return (
    <div className="container">
      <Graph
        graph={graph}
        highlightNode={null}
        startNode={null}
        goalNode={null}
        onNodeClick={() => {}}
      />
      <div className="button-group">
        <button>Clear</button>
        <button>DFS</button>
        <button>BFS</button>
      </div>
    </div>
  );
}

export default App;
