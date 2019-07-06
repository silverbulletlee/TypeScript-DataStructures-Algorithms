/**
 * @file 自平衡树类实现
 * @author silverbulletlee
 */
import { compareFunctionType } from '@utils';
import { BinarySearchTree } from '../BinarySearchTree';
export declare class AVLTree<T> extends BinarySearchTree<T> {
    protected compareFn: compareFunctionType<T>;
    constructor(compareFn?: compareFunctionType<T>);
    private getNodeHeight;
    private getBalanceFactor;
}
