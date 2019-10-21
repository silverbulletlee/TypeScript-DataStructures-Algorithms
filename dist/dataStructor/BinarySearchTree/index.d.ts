/**
 * @file 二叉搜索树类实现
 * @author silverbulletlee
 */
import { TreeNodeType } from './TreeNode';
import { compareFunctionType } from '@utils';
export declare class BinarySearchTree<T> {
    private root;
    private compareFn;
    constructor(compareFn?: compareFunctionType<T>);
    getRoot(): TreeNodeType<T>;
    getMaxDepth(): number;
    getMax(): TreeNodeType<T>;
    getMin(): TreeNodeType<T>;
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
    toString(separator?: string): string;
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
