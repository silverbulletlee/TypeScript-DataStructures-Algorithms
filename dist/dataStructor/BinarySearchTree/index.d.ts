/**
 * @file 二叉搜索树类实现
 * @author silverbulletlee
 */
import { bstNodeType } from './BSTNode';
import { compareFunctionType } from '@utils';
export declare class BinarySearchTree<T> {
    private compareFn;
    private root;
    constructor(compareFn?: compareFunctionType<T>);
    getRoot(): bstNodeType<T>;
    getMaxDepth(): number;
    getMax(): bstNodeType<T>;
    getMin(): bstNodeType<T>;
    find(val: T): boolean;
    levelOrder(): T[];
    preOrder(): T[];
    inOrder(): T[];
    postOrder(): T[];
    preOrderRec(): T[];
    inOrderRec(): T[];
    postOrderRec(): T[];
    insertNode(val: T): void;
    remove(val: T): void;
    private getMaxDepthHelper;
    private getMinHelper;
    private getMaxHelper;
    private findHelper;
    private preOrderRecHelper;
    private inOrderRecHelper;
    private postOrderRecHelper;
    private insertNodeHelper;
    private removeHelper;
}
