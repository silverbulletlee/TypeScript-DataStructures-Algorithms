/**
 * @file 二叉搜索树类实现
 * @author silverbulletlee
 */
import { TreeNodeType, TreeNode } from './TreeNode';
import { compareFunctionType, defaultCompare, compareEnmu } from '@utils';
import { Stack } from '../Stack';
import { Queue } from '../Queue';

export class BinarySearchTree<T> {
    private root: TreeNodeType<T> = null;
    private compareFn: compareFunctionType<T> = defaultCompare;
    constructor(compareFn: compareFunctionType<T> = defaultCompare) {
        this.compareFn = compareFn;
    }
    getRoot(): TreeNodeType<T> {
        return this.root;
    }
    getMaxDepth(): number {
        return this.getMaxDepthHelper(this.root);
    }
    getMax(): TreeNodeType<T> {
        return this.getMaxHelper(this.root);
    }
    getMin(): TreeNodeType<T> {
        return this.getMinHelper(this.root);
    }
    find(val: T): boolean {
        return this.findHelper(this.root, val);
    }
    levelOrder(): T[] {
        let res: T[] = [];
        let queue = new Queue<TreeNodeType<T>>();
        this.root && queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            let node = queue.dequeue();
            res.push(node.val);
            node.left && queue.enqueue(node.left);
            node.right && queue.enqueue(node.right);
        }

        return res;
    }
    preOrder(): T[] {
        let res: T[] = [];
        let stack = new Stack<TreeNodeType<T>>();
        this.root && stack.push(this.root);

        while (!stack.isEmpty()) {
            let node = stack.pop();
            res.push(node.val);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }

        return res;
    }
    inOrder(): T[] {
        let res: T[] = [];
        let stack = new Stack<TreeNodeType<T>>();
        let node = this.root;

        while (node || !stack.isEmpty()) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }

        return res;
    }
    postOrder(): T[] {
        let res: T[] = [];
        let stack = new Stack<TreeNodeType<T>>();
        this.root && stack.push(this.root);

        while (!stack.isEmpty()) {
            let node = stack.pop();
            res.unshift(node.val);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }

        return res;
    }
    preOrderRec(): T[] {
        return this.preOrderRecHelper(this.root, []);
    }
    inOrderRec(): T[] {
        return this.inOrderRecHelper(this.root, []);
    }
    postOrderRec(): T[] {
        return this.postOrderRecHelper(this.root, []);
    }
    insertNode(val: T): void {
        let newNode: TreeNodeType<T> = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNodeHelper(this.root, newNode);
        }
    }
    remove(val: T): void {
        if (!this.find(val)) {
            return;
        }
        this.root = this.removeHelper(this.root, val);
    }
    private getMaxDepthHelper(node: TreeNodeType<T> = this.root): number {
        return node ? 1 + Math.max(this.getMaxDepthHelper(node.left), this.getMaxDepthHelper(node.right)) : 0;
    }
    private getMinHelper(node: TreeNodeType<T> = this.root): TreeNodeType<T> {
        let cur = node;
        while (cur && cur.left) {
            cur = cur.left;
        }
        return cur;
    }
    private getMaxHelper(node: TreeNodeType<T> = this.root): TreeNodeType<T> {
        let cur = node;
        while (cur && cur.right) {
            cur = cur.right;
        }
        return cur;
    }
    private findHelper(node: TreeNodeType<T> = this.root, val: T): boolean {
        if (!node) {
            return false;
        }
        if (this.compareFn(val, node.val) === compareEnmu.LESS_THAN) {
            return this.findHelper(node.left, val);
        }

        if (this.compareFn(val, node.val) === compareEnmu.BIGGER_THAN) {
            return this.findHelper(node.right, val);
        }

        return true;
    }
    private preOrderRecHelper(node: TreeNodeType<T> = this.root, res: T[]): T[] {
        if (!node) {
            res.push(node.val);
            this.preOrderRecHelper(node.left, res);
            this.preOrderRecHelper(node.right, res);
        }
        return res;
    }
    private inOrderRecHelper(node: TreeNodeType<T> = this.root, res: T[] = []): T[] {
        if (node) {
            this.inOrderRecHelper(node.left, res);
            res.push(node.val);
            this.inOrderRecHelper(node.right, res);
        }
        return res;
    }
    private postOrderRecHelper(node: TreeNodeType<T> = this.root, res: T[]): T[] {
        if (node) {
            this.postOrderRecHelper(node.left, res);
            this.postOrderRecHelper(node.right, res);
            res.push(node.val);
        }
        return res;
    }
    private insertNodeHelper(node: TreeNodeType<T>, newNode: TreeNodeType<T>): void {
        if (this.compareFn(newNode.val, node.val) === compareEnmu.LESS_THAN) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNodeHelper(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNodeHelper(node.right, newNode);
            }
        }
    }
    private removeHelper(node: TreeNodeType<T> = this.root, val: T): TreeNodeType<T> {
        if (!node) {
            return node;
        }

        if (this.compareFn(val, node.val) === compareEnmu.LESS_THAN) {
            node.left = this.removeHelper(node.left, val);
            return node;
        } else if (this.compareFn(val, node.val) === compareEnmu.BIGGER_THAN) {
            node.right = this.removeHelper(node.right, val);
            return node;
        }

        // 要删除的节点是叶子节点
        if (!node.left && !node.right) {
            return null;
        }

        // 要删除的节点有一个子节点
        if ((!node.left && node.right) || (node.left && !node.right)) {
            return node.left || node.right;
        }

        // 要删除的节点有两个子节点(其实也可以找左子树最大的节点用来替换)
        let aux = this.getMinHelper(node.right);
        node.val = aux.val;
        node.right = this.removeHelper(node.right, aux.val);

        return node;
    }
}
