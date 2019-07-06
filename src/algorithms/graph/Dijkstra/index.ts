/**
 * @file Dijkstra算法实现
 * @author silverbulletlee
 */

const INF = Infinity;
// 表示对Dijkstra尊重，函数名首字母大写。
// tslint:disable-next-line:variable-name
export const Dijkstra = (graph: number[][], src: number): number[] => {
    // 初始化distances：源点到所有点的距离，visited：是否访问（遍历过矩阵中它那一行）过当前顶点
    let distances = new Array(graph.length).fill(INF);
    let visited = new Array(graph.length).fill(false);
    // 源点到自身距离肯定为0
    distances[src] = 0;
    // 找出到其余源点的最短路径
    for (let n = graph.length; n > 0; n--) {
        // 未访问过顶点选出距离最近的源点
        let min = INF;
        let minIndex = -1;
        for (let i = 0; i < distances.length; i++) {
            if (!visited[i] && distances[i] <= min) {
                min = distances[i];
                minIndex = i;
            }
        }

        // 选出的标记位访问过避免重复计算
        visited[minIndex] = true;

        for (let j = 0; j < graph.length; j++) {
            // 找到更短路径更新最短路径
            if (
                !visited[j] &&
                graph[minIndex][j] !== 0 &&
                graph[minIndex][j] !== INF &&
                distances[minIndex] !== INF &&
                distances[minIndex] + graph[minIndex][j] < distances[j]
            ) {
                distances[j] = distances[minIndex] + graph[minIndex][j];
            }
        }
    }

    return distances;
};
