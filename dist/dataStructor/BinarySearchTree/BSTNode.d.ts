/**
 * @file 二叉搜索树节点类实现
 * @author silverbulletlee
 */
export declare type bstNodeType<T> = {
    val: T;
    left: bstNodeType<T>;
    right: bstNodeType<T>;
} | null;
export declare class BSTNode<T> {
    val: T;
    left: bstNodeType<T>;
    right: bstNodeType<T>;
    constructor(val: T);
}
