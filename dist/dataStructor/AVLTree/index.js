"use strict";
/**
 * @file 自平衡树类实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("@utils");
const BinarySearchTree_1 = require("../BinarySearchTree");
var balanceFactorEnum;
(function (balanceFactorEnum) {
    balanceFactorEnum[balanceFactorEnum["UNBALANCE_RIGHT"] = 0] = "UNBALANCE_RIGHT";
    balanceFactorEnum[balanceFactorEnum["SLIGHTLY_UNBALANCE_RIGHT"] = 1] = "SLIGHTLY_UNBALANCE_RIGHT";
    balanceFactorEnum[balanceFactorEnum["BALANCED"] = 2] = "BALANCED";
    balanceFactorEnum[balanceFactorEnum["SLIGHTLY_UNBALANCE_LEFT"] = 3] = "SLIGHTLY_UNBALANCE_LEFT";
    balanceFactorEnum[balanceFactorEnum["UNBALANCE_LEFT"] = 4] = "UNBALANCE_LEFT";
})(balanceFactorEnum || (balanceFactorEnum = {}));
class AVLTree extends BinarySearchTree_1.BinarySearchTree {
    constructor(compareFn = _utils_1.defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.compareFn = compareFn;
    }
    getNodeHeight(node) {
        if (!node) {
            return -1;
        }
        return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
    }
    getBalanceFactor(node) {
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
exports.AVLTree = AVLTree;
