"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 二叉搜索树类实现
 * @author silverbulletlee
 */

const TreeNode_1 = require("./TreeNode");

const _utils_1 = require("../../utils");

const Stack_1 = require("../Stack");

const Queue_1 = require("../Queue");

class BinarySearchTree {
  constructor(compareFn = _utils_1.defaultCompare) {
    this.root = null;
    this.compareFn = _utils_1.defaultCompare;
    this.compareFn = compareFn;
  }

  getRoot() {
    return this.root;
  }

  getMaxDepth() {
    return this.getMaxDepthHelper(this.root);
  }

  getMax() {
    return this.getMaxHelper(this.root);
  }

  getMin() {
    return this.getMinHelper(this.root);
  }

  find(val) {
    return this.findHelper(this.root, val);
  }

  levelOrder() {
    let res = [];
    let queue = new Queue_1.Queue();
    this.root && queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      res.push(node.val);
      node.left && queue.enqueue(node.left);
      node.right && queue.enqueue(node.right);
    }

    return res;
  }

  preOrder() {
    let res = [];
    let stack = new Stack_1.Stack();
    this.root && stack.push(this.root);

    while (!stack.isEmpty()) {
      let node = stack.pop();
      res.push(node.val);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }

    return res;
  }

  inOrder() {
    let res = [];
    let stack = new Stack_1.Stack();
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

  postOrder() {
    let res = [];
    let stack = new Stack_1.Stack();
    this.root && stack.push(this.root);

    while (!stack.isEmpty()) {
      let node = stack.pop();
      res.unshift(node.val);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }

    return res;
  }

  preOrderRec() {
    return this.preOrderRecHelper(this.root, []);
  }

  inOrderRec() {
    return this.inOrderRecHelper(this.root, []);
  }

  postOrderRec() {
    return this.postOrderRecHelper(this.root, []);
  }

  insertNode(val) {
    let newNode = new TreeNode_1.TreeNode(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNodeHelper(this.root, newNode);
    }
  }

  remove(val) {
    if (!this.find(val)) {
      return;
    }

    this.root = this.removeHelper(this.root, val);
  }

  getMaxDepthHelper(node = this.root) {
    return node ? 1 + Math.max(this.getMaxDepthHelper(node.left), this.getMaxDepthHelper(node.right)) : 0;
  }

  getMinHelper(node = this.root) {
    let cur = node;

    while (cur && cur.left) {
      cur = cur.left;
    }

    return cur;
  }

  getMaxHelper(node = this.root) {
    let cur = node;

    while (cur && cur.right) {
      cur = cur.right;
    }

    return cur;
  }

  findHelper(node = this.root, val) {
    if (!node) {
      return false;
    }

    if (this.compareFn(val, node.val) === _utils_1.compareEnmu.LESS_THAN) {
      return this.findHelper(node.left, val);
    }

    if (this.compareFn(val, node.val) === _utils_1.compareEnmu.BIGGER_THAN) {
      return this.findHelper(node.right, val);
    }

    return true;
  }

  preOrderRecHelper(node = this.root, res) {
    if (!node) {
      res.push(node.val);
      this.preOrderRecHelper(node.left, res);
      this.preOrderRecHelper(node.right, res);
    }

    return res;
  }

  inOrderRecHelper(node = this.root, res = []) {
    if (node) {
      this.inOrderRecHelper(node.left, res);
      res.push(node.val);
      this.inOrderRecHelper(node.right, res);
    }

    return res;
  }

  postOrderRecHelper(node = this.root, res) {
    if (node) {
      this.postOrderRecHelper(node.left, res);
      this.postOrderRecHelper(node.right, res);
      res.push(node.val);
    }

    return res;
  }

  insertNodeHelper(node, newNode) {
    if (this.compareFn(newNode.val, node.val) === _utils_1.compareEnmu.LESS_THAN) {
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

  removeHelper(node = this.root, val) {
    if (!node) {
      return node;
    }

    if (this.compareFn(val, node.val) === _utils_1.compareEnmu.LESS_THAN) {
      node.left = this.removeHelper(node.left, val);
      return node;
    } else if (this.compareFn(val, node.val) === _utils_1.compareEnmu.BIGGER_THAN) {
      node.right = this.removeHelper(node.right, val);
      return node;
    } // 要删除的节点是叶子节点


    if (!node.left && !node.right) {
      return null;
    } // 要删除的节点有一个子节点


    if (!node.left && node.right || node.left && !node.right) {
      return node.left || node.right;
    } // 要删除的节点有两个子节点(其实也可以找左子树最大的节点用来替换)


    let aux = this.getMinHelper(node.right);
    node.val = aux.val;
    node.right = this.removeHelper(node.right, aux.val);
    return node;
  }

}

exports.BinarySearchTree = BinarySearchTree;