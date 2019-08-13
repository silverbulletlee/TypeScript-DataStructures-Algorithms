"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 堆抽象类实现
 * @author silverbulletlee
 */
const _utils_1 = require("@utils");
class Heap {
    constructor(compareFn = _utils_1.defaultCompare) {
        this.heap = [];
        this.compareFn = _utils_1.defaultCompare;
        this.compareFn = compareFn;
    }
    static getParentIndex(index) {
        return (index - 1) >>> 1;
    }
    static getLeftIndex(index) {
        return index * 2 + 1;
    }
    static getRightIndex(index) {
        return (index + 1) * 2;
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    insert(el) {
        this.heap.push(el);
        this.siftUp(this.size() - 1);
    }
    toString() {
        return JSON.stringify(this.heap);
    }
    delTop() {
        let top = this.heap.shift();
        if (this.size() === 0) {
            return top;
        }
        this.heap.unshift(this.heap.pop());
        this.siftDown(0);
        return top;
    }
    getTop() {
        return this.heap[0];
    }
}
exports.Heap = Heap;
