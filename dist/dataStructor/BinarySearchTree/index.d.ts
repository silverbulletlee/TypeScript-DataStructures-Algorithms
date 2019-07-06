/**
 * @file 二叉搜索树类实现
 * @author silverbulletlee
 */
import { TreeNodeType } from './TreeNode';
import { compareFunctionType } from '@utils';
export declare class BinarySearchTree<T> {
    protected root: TreeNodeType<T>;
    protected compareFn: compareFunctionType<T>;
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
    protected getMaxDepthHelper(node?: TreeNodeType<T>): number;
    protected getMinHelper(node?: TreeNodeType<T>): TreeNodeType<T>;
    protected getMaxHelper(node?: TreeNodeType<T>): TreeNodeType<T>;
    protected findHelper(node: TreeNodeType<T>, val: T): boolean;
    protected preOrderRecHelper(node: TreeNodeType<T>, res: T[]): T[];
    protected inOrderRecHelper(node?: TreeNodeType<T>, res?: T[]): T[];
    protected postOrderRecHelper(node: TreeNodeType<T>, res: T[]): T[];
    protected insertNodeHelper(node: TreeNodeType<T>, newNode: TreeNodeType<T>): void;
    protected removeHelper(node: TreeNodeType<T>, val: T): TreeNodeType<T>;
}
