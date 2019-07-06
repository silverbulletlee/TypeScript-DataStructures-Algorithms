/**
 * @file 图类邻接表描述实现
 * @author silverbulletlee
 */
import { Stack } from '../Stack';
import { Queue } from '../Queue';

// 枚举顶点状态，未访问过顶点，访问过顶点未访问过关联节点，访问过顶点且访问过顶点关联节点
enum vertexStateEnum {
    UNDISCOVER,
    DISCOVERED,
    VISITED,
}
// tslint中interface也应用了class-name的命名规范，问题是老子就喜欢interface首字母小写
// tslint:disable-next-line:class-name
interface getShortestPathInterface<T> {
    distances: Map<T, number>;
    predecessors: Map<T, T | null>;
}
interface DAGHelperInterface<T> {
    discoverTime: Map<T, number>;
    finishTime: Map<T, number>;
    predecessors: Map<T, T | null>;
}

export class Graph<T> {
    // 是否有向
    private isDirected: boolean = false;
    // 储存所有顶点
    private vertices: T[] = [];
    // 邻接表
    private adjList: Map<T, T[]> = new Map();
    constructor(isDirected = false) {
        this.isDirected = isDirected;
    }
    getVertices(): T[] {
        return this.vertices;
    }
    getAdjList(): Map<T, T[]> {
        return this.adjList;
    }
    BFS(vertex: T = this.vertices[0]): T[] {
        let res: T[] = [];
        let queue = new Queue<T>();
        let verticesState = this.initVerticesState();
        vertex && queue.enqueue(vertex);
        while (!queue.isEmpty()) {
            let v = queue.dequeue();
            let neighbors = this.adjList.get(v);
            verticesState.set(v, vertexStateEnum.DISCOVERED);
            for (let neighbor of neighbors) {
                if (verticesState.get(neighbor) === vertexStateEnum.UNDISCOVER) {
                    verticesState.set(neighbor, vertexStateEnum.DISCOVERED);
                    queue.enqueue(neighbor);
                }
            }
            verticesState.set(v, vertexStateEnum.VISITED);
            res.push(v);
        }
        return res;
    }
    getShortestPath(vertex: T = this.vertices[0]): getShortestPathInterface<T> {
        let verticesState = this.initVerticesState();
        let queue = new Queue<T>();
        let distances = new Map();
        let predecessors = new Map();

        for (let v of this.vertices) {
            distances.set(v, 0);
            predecessors.set(v, null);
        }

        vertex && queue.enqueue(vertex);

        while (!queue.isEmpty()) {
            let v = queue.dequeue();
            let neighbors = this.adjList.get(v);
            verticesState.set(v, vertexStateEnum.DISCOVERED);
            for (let neighbor of neighbors) {
                if (verticesState.get(neighbor) === vertexStateEnum.UNDISCOVER) {
                    verticesState.set(neighbor, vertexStateEnum.DISCOVERED);
                    distances.set(neighbor, distances.get(v) + 1);
                    predecessors.set(neighbor, v);
                    queue.enqueue(neighbor);
                }
            }
            verticesState.set(v, vertexStateEnum.VISITED);
        }

        return {
            distances,
            predecessors,
        };
    }
    DFS(vertex: T = this.vertices[0]): T[] {
        let res: T[] = [];
        let verticesState = this.initVerticesState();
        let stack = new Stack<T>();

        vertex && stack.push(vertex);

        while (!stack.isEmpty()) {
            let v = stack.pop();
            let neighbors = this.adjList.get(v);
            verticesState.set(v, vertexStateEnum.DISCOVERED);

            for (let i = neighbors.length; i >= 0; i--) {
                let u = neighbors[i];
                if (verticesState.get(u) === vertexStateEnum.UNDISCOVER) {
                    verticesState.set(u, vertexStateEnum.DISCOVERED);
                    stack.push(u);
                }
            }

            verticesState.set(v, vertexStateEnum.VISITED);
            res.push(v);
        }

        return res;
    }
    DFSRec(): T[] {
        let res: T[] = [];
        let verticesState = this.initVerticesState();

        for (let vertex of this.vertices) {
            if (verticesState.get(vertex) === vertexStateEnum.UNDISCOVER) {
                this.DFSRecHelper(vertex, verticesState, res);
            }
        }

        return res;
    }
    // 拓扑排序
    DAG(): T[] {
        if (!this.isDirected) {
            return;
        }
        return [...this.DAGHelper().finishTime].sort((v, u) => u[1] - v[1]).map(v => v[0]);
    }
    // 为两条顶点添加边
    addEdge(v: T, u: T): void {
        if (!this.adjList.has(v)) {
            this.addVertex(v);
        }
        if (!this.adjList.has(u)) {
            this.addVertex(u);
        }
        this.adjList.get(v).push(u);
        if (!this.isDirected) {
            this.adjList.get(u).push(v);
        }
    }
    // 添加顶点
    addVertex(v: T): void {
        // 顶点不存在于图中
        if (!this.adjList.has(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    toString(): string {
        let res = '';
        for (let v of this.vertices) {
            res += `${v} ->`;
            let neighbors = this.adjList.get(v);
            for (let neighbor of neighbors) {
                res += ` ${neighbor}`;
            }
            res += '\n';
        }
        return res;
    }
    private initVerticesState(): Map<T, vertexStateEnum> {
        let state = new Map();
        for (let v of this.vertices) {
            state.set(v, vertexStateEnum.UNDISCOVER);
        }
        return state;
    }
    private DFSRecHelper(vertex: T, verticesState: Map<T, vertexStateEnum>, res: T[]): T[] {
        verticesState.set(vertex, vertexStateEnum.DISCOVERED);
        res.push(vertex);
        let neighbors = this.adjList.get(vertex);

        for (let neighbor of neighbors) {
            if (verticesState.get(neighbor) === vertexStateEnum.UNDISCOVER) {
                this.DFSRecHelper(neighbor, verticesState, res);
            }
        }

        verticesState.set(vertex, vertexStateEnum.VISITED);

        return res;
    }
    private DAGHelper(): DAGHelperInterface<T> {
        let verticesState = this.initVerticesState();
        let time = {
            count: 0,
        };

        let discoverTime = new Map<T, number>();
        let finishTime = new Map<T, number>();
        let predecessors = new Map<T, T | null>();

        for (let v of this.vertices) {
            discoverTime.set(v, 0);
            finishTime.set(v, 0);
            predecessors.set(v, null);
        }
        for (let v of this.vertices) {
            if (verticesState.get(v) === vertexStateEnum.UNDISCOVER) {
                this.DAGHelperVisited(v, verticesState, discoverTime, finishTime, predecessors, time);
            }
        }
        return {
            discoverTime,
            finishTime,
            predecessors,
        };
    }
    private DAGHelperVisited(
        v: T,
        verticesState: Map<T, vertexStateEnum>,
        discoverTime: Map<T, number>,
        finishTime: Map<T, number>,
        predecessors: Map<T, T | void>,
        time: { count: number },
    ): void {
        verticesState.set(v, vertexStateEnum.DISCOVERED);
        discoverTime.set(v, ++time.count);

        let neighbors = this.adjList.get(v);

        for (let neighbor of neighbors) {
            if (verticesState.get(neighbor) === vertexStateEnum.UNDISCOVER) {
                predecessors.set(neighbor, v);
                this.DAGHelperVisited(neighbor, verticesState, discoverTime, finishTime, predecessors, time);
            }
        }

        verticesState.set(v, vertexStateEnum.VISITED);
        finishTime.set(v, ++time.count);
    }
}
