"use strict";
/**
 * @file FloydWarshall算法实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 同样表示对FloydWarshall尊重，函数名首字母大写。
// tslint:disable-next-line:variable-name
exports.FloydWarshall = (graph) => {
    let distances = [];
    for (let i = 0; i < graph.length; i++) {
        distances[i] = [];
        for (let j = 0; j < graph[i].length; j++) {
            if (i === j) {
                distances[i][j] = 0;
            }
            else if (!isFinite(graph[i][j])) {
                distances[i][j] = Infinity;
            }
            else {
                distances[i][j] = graph[i][j];
            }
        }
    }
    for (let k = 0; k < distances.length; k++) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < distances.length; i++) {
            for (let j = 0; j < distances.length; j++) {
                // 第i个顶点到第k个顶点与第k个顶点到第j个顶点是否比原来第i个顶点到第j个顶点距离短
                if (distances[i][k] + distances[k][j] < distances[i][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            }
        }
    }
    return distances;
};
