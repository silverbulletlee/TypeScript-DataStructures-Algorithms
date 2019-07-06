/**
 * @file 自平衡树类实现
 * @author silverbulletlee
 */

import { compareFunctionType, defaultCompare, compareEnmu } from '@utils';
import { TreeNodeType, TreeNode } from '../BinarySearchTree/TreeNode';
import { BinarySearchTree } from '../BinarySearchTree';

enum balanceFactorEnum {
    UNBALANCE_RIGHT,
    SLIGHTLY_UNBALANCE_RIGHT,
    BALANCED,
    SLIGHTLY_UNBALANCE_LEFT,
    UNBALANCE_LEFT,
}

export class AVLTree<T> extends BinarySearchTree<T> {
    constructor(protected compareFn: compareFunctionType<T> = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
    }
    private getNodeHeight(node: TreeNodeType<T>): number {
        if (!node) {
            return -1;
        }
        return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
    }
    private getBalanceFactor(node: TreeNodeType<T>): balanceFactorEnum {
        switch (this.getNodeHeight(node.left) - this.getNodeHeight(node.right)) {
            case -2:
                return balanceFactorEnum.UNBALANCE_RIGHT;
            case -1:
                return balanceFactorEnum.SLIGHTLY_UNBALANCE_RIGHT;
            case 1:
                return balanceFactorEnum.SLIGHTLY_UNBALANCE_LEFT;
            case 2:
                return balanceFactorEnum.UNBALANCE_LEFT;
            default:
                return balanceFactorEnum.BALANCED;
        }
    }
}
