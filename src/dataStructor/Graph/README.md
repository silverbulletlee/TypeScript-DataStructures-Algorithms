# 图

## 相关概念

一种非线性数据结构，由边连接的顶点组成。G=(V,E) V:一组顶点，E:一组边，树是一种特殊的图。V-V 邻接 V-EV-E关联。

无向边：若邻接顶点次序无所谓，邻接这两个顶点的边称为无向边。

无向图：所有边均为无向边的图，称为无向图。

有向图：所有的边均为有向边的图称为有向图。U->V V称作头，U称作尾。

混合图：有的边有向，有的边无向。

强连通：每两个顶点双向存在路径，该图示强连通的。

权重：图还可以是加权的。加权图是边赋予了权重。

路径：一系列顶点，按照邻接关系组成的序列。序列中没有重复节点叫简单路径，有重复节点的路径叫不简单路径。

有环&无环：起点=重点称为环路，简单有环路径不包含重复路径。

有向无环图：所有边有向，但是无环。

图的表示：邻接矩阵，关联矩阵。

邻接矩阵：图有n个顶点，用一个n * n 矩阵表示顶点与顶点之间的关系，matrix[i][j] 为 1，表示两个顶点相连，如果是加权图，matrix[i][j]表示为边的权重。

关联矩阵：图有n个顶点，e条边，用一个n行e列的矩阵表示顶点与边的关系，e[i]应该有两行值为1，表示两个顶点相连。

## 遍历

### 广度优先遍历

由顶点v开始，访问v的邻接点，再访问所有v邻接点的邻接点，直到所有节点都被访问。

应用：获取顶点最短路径。

### 深度优先遍历

由顶点v开始，访问v的任意一邻接点，递归执行，直到所有节点都被访问。

应用：拓扑排序

