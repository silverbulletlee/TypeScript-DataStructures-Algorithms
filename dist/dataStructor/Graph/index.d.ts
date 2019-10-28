interface getShortestPathInterface<T> {
    distances: Map<T, number>;
    predecessors: Map<T, T | null>;
}
export declare class Graph<T> {
    private isDirected;
    private vertices;
    private adjList;
    constructor(isDirected?: boolean);
    getVertices(): T[];
    getAdjList(): Map<T, T[]>;
    addEdge(v: T, u: T): void;
    addVertex(v: T): void;
    toString(): string;
    BFS(vertex?: T): T[];
    getShortestPaths(vertex?: T): getShortestPathInterface<T>;
    DFS(vertex?: T): T[];
    DFSRec(): T[];
    DAG(): T[];
    private initVerticesState;
    private DFSRecHelper;
    private DAGHelper;
    private DAGHelperVisited;
}
export {};
