/**
 * @file 二叉搜索树节点类实现
 * @author silverbulletlee
 */

export type TreeNodeType<T> = {
    val: T;
    left: TreeNodeType<T>;
    right: TreeNodeType<T>;
} | null;

export class TreeNode<T> {
    public val: T;
    public left: TreeNode<T> = null;
    public right: TreeNode<T> = null;
    constructor(val: T) {
        this.val = val;
    }
}
