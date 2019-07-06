/**
 * @file 二叉搜索树节点类实现
 * @author silverbulletlee
 */
export declare type TreeNodeType<T> = {
    val: T;
    left: TreeNodeType<T>;
    right: TreeNodeType<T>;
} | null;
export declare class TreeNode<T> {
    val: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
    constructor(val: T);
}
