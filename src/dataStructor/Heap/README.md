# 堆

堆是一种完全二叉树（平衡因子非负）描述数组实现的数据结构。

如果只需要查找极值元素数据结构不用绝对有序。相对有即可序。

结构性：堆用完全二叉树来描述，每一层都有左右节点（除最后一层叶子节点），并且最后一层页节点尽可能都是左节点。

堆序性：堆中每个节点值小于它的两个子节点即最小堆（也称小顶堆）或者大于它的两个子节点即最大堆（也称大顶堆）。

相对于二叉搜索树实现简单，维护成本低，并且效率更高。

## 操作

静态操作O(1)。动态操作O(logn)。

插入：向数组直接插入一个元素，然后上滤（即新插入节点跟父节点比较交换）保持堆序性。时间复杂度O(logn)。

删除：只能删除堆顶元素，然后将最后一个元素放到堆顶，进行下滤（即节点跟两个孩子节点比较交换），保持堆有序性，时间复杂度O(logn)。