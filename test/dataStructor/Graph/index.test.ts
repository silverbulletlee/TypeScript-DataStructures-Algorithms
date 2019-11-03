import { Graph } from '../../../src/dataStructor/Graph';

test('Graph isDirected = false', () => {
    let graph = new Graph<string>();

    graph.addEdge('A', 'B');

    let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (let myVertex of myVertices) {
        graph.addVertex(myVertex);
    }

    expect(graph.getVertices()).toEqual(myVertices);

    expect(graph.getAdjList()).toEqual((() => myVertices.reduce((map, vertex) => {
        map.set(vertex, []);
        if (vertex === 'A') {
            map.get(vertex).push('B');
        }
        if (vertex === 'B') {
            map.get(vertex).push('A');
        }
        return map;
    }, new Map()))());

    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');

    expect(graph.toString()).toEqual(JSON.stringify(['A -> B C D', 'B -> A E F', 'C -> A D G', 'D -> A C G H', 'E -> B I', 'F -> B', 'G -> C D', 'H -> D', 'I -> E']));
    expect(graph.DAG()).toBeUndefined();

    expect(graph.BFS()).toEqual(myVertices);
    expect(graph.DFS()).toEqual(['A', 'B', 'E', 'I', 'F', 'C', 'G', 'D', 'H']);
    expect(graph.DFSRec()).toEqual(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']);

    let distances = [0, 1, 1, 1, 2, 2, 2, 2, 3];
    let predecessors = [null, 'A', 'A', 'A', 'B', 'B', 'C', 'D', 'E'];

    expect(graph.getShortestPaths()).toEqual({
        distances: (() => myVertices.reduce((map, vertex, index) => {
            map.set(vertex, distances[index]);
            return map;
        }, new Map()))(),
        predecessors: (() => myVertices.reduce((map, vertex, index) => {
            map.set(vertex, predecessors[index]);
            return map;
        }, new Map()))()
    });
});

test('Graph isDirected = true', () => {
    let graph = new Graph<string>(true);

    let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (let myVertex of myVertices) {
        graph.addVertex(myVertex);
    }

    expect(graph.getVertices()).toEqual(myVertices);

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');
    expect(graph.getVertices()).toEqual(myVertices);
    expect(graph.toString()).toEqual(JSON.stringify(['A -> B C D', 'B -> E F', 'C -> D G', 'D -> G H', 'E -> I']));
    expect(graph.DAG()).toEqual(['A', 'C', 'D', 'H', 'G', 'B', 'F', 'E', 'I']);
});
