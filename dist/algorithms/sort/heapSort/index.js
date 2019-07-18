"use strict";
/**
 * @file 堆排实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("@utils");
const getLeftIndex = (index) => index * 2 + 1;
const getRightIndex = (index) => (index + 1) * 2;
const getParentIndex = (index) => (index - 1) >>> 1;
const heapify = (array) => {
    let lastTreePos = getParentIndex(array.length - 1);
    for (let i = lastTreePos; i >= 0; i--) {
        buildMaxHeap(array, i, array.length);
    }
};
const buildMaxHeap = (array, index, heapSize) => {
    let leftIndex = getLeftIndex(index);
    let rightIndex = getRightIndex(index);
    // 没有子节点，因为堆是完全二叉树没有左节点必然没有右节点
    if (heapSize < leftIndex) {
        return;
    }
    // 只有左节点
    if (leftIndex <= heapSize && heapSize < rightIndex) {
        if (array[index] < array[leftIndex]) {
            _utils_1.swap(array, index, leftIndex);
            buildMaxHeap(array, leftIndex, heapSize);
        }
    }
    // 存在两个节点
    if (rightIndex <= heapSize) {
        let maxIndex = array[leftIndex] < array[rightIndex] ? rightIndex : leftIndex;
        if (array[index] < array[maxIndex]) {
            _utils_1.swap(array, index, maxIndex);
            buildMaxHeap(array, maxIndex, heapSize);
        }
    }
};
exports.heapSort = (array) => {
    // 将待排序数组堆化
    heapify(array);
    for (let i = array.length - 1; i > 0; i--) {
        // 最大堆堆顶元素一直最大
        _utils_1.swap(array, 0, i);
        // 重新建堆 将最大元素调整到堆顶
        buildMaxHeap(array, 0, i - 1);
    }
    return array;
};
