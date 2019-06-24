/**
 * @file 二叉搜索树节点类实现
 * @author silverbulletlee
 */

export type bstNodeType<T> = {
    val: T;
    left: bstNodeType<T>;
    right: bstNodeType<T>;
} | null;

export class BSTNode<T> {
    public val: T;
    public left: bstNodeType<T> = null;
    public right: bstNodeType<T> = null;
    constructor(val: T) {
        this.val = val;
    }
}
