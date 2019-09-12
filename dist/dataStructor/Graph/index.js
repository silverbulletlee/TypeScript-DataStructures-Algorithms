"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 图类邻接表描述实现
 * @author silverbulletlee
 */

const Stack_1 = require("../Stack");

const Queue_1 = require("../Queue"); // 枚举顶点状态，未访问过顶点，访问过顶点未访问过关联节点，访问过顶点且访问过顶点关联节点


var vertexStateEnum;

(function (vertexStateEnum) {
  vertexStateEnum[vertexStateEnum["UNDISCOVER"] = 0] = "UNDISCOVER";
  vertexStateEnum[vertexStateEnum["DISCOVERED"] = 1] = "DISCOVERED";
  vertexStateEnum[vertexStateEnum["VISITED"] = 2] = "VISITED";
})(vertexStateEnum || (vertexStateEnum = {}));

class Graph {
  constructor(isDirected = false) {
    // 是否有向
    this.isDirected = false; // 储存所有顶点

    this.vertices = []; // 邻接表

    this.adjList = new Map();
    this.isDirected = isDirected;
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  BFS(vertex = this.vertices[0]) {
    let res = [];
    let queue = new Queue_1.Queue();
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

  getShortestPath(vertex = this.vertices[0]) {
    let verticesState = this.initVerticesState();
    let queue = new Queue_1.Queue();
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
      predecessors
    };
  }

  DFS(vertex = this.vertices[0]) {
    let res = [];
    let verticesState = this.initVerticesState();
    let stack = new Stack_1.Stack();
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

  DFSRec() {
    let res = [];
    let verticesState = this.initVerticesState();

    for (let vertex of this.vertices) {
      if (verticesState.get(vertex) === vertexStateEnum.UNDISCOVER) {
        this.DFSRecHelper(vertex, verticesState, res);
      }
    }

    return res;
  } // 拓扑排序


  DAG() {
    if (!this.isDirected) {
      return;
    }

    return [...this.DAGHelper().finishTime].sort((v, u) => u[1] - v[1]).map(v => v[0]);
  } // 为两条顶点添加边


  addEdge(v, u) {
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
  } // 添加顶点


  addVertex(v) {
    // 顶点不存在于图中
    if (!this.adjList.has(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  toString() {
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

  initVerticesState() {
    let state = new Map();

    for (let v of this.vertices) {
      state.set(v, vertexStateEnum.UNDISCOVER);
    }

    return state;
  }

  DFSRecHelper(vertex, verticesState, res) {
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

  DAGHelper() {
    let verticesState = this.initVerticesState();
    let time = {
      count: 0
    };
    let discoverTime = new Map();
    let finishTime = new Map();
    let predecessors = new Map();

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
      predecessors
    };
  }

  DAGHelperVisited(v, verticesState, discoverTime, finishTime, predecessors, time) {
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

exports.Graph = Graph;