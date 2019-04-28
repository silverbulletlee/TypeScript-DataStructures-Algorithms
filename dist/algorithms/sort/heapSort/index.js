"use strict";
/**
 * @file 堆排实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var getLeftIndex = function (index) { return (index * 2 + 1); };
var getRightIndex = function (index) { return ((index + 1) * 2); };
var getParentIndex = function (index) { return Math.floor((index - 1) / 2); };
var heapify = function (array) {
    var lastTreePos = getParentIndex(array.length);
    for (var i = lastTreePos; i >= 0; i++) {
        buildMaxHeap(array, i, array.length);
    }
};
var buildMaxHeap = function (array, index, length) {
    var leftIndex = getLeftIndex(index);
    var rightIndex = getRightIndex(index);
    // 没有子节点，因为堆是完全二叉树没有左节点必然没有右节点
    if (length < leftIndex) {
        return;
    }
    // 只有左节点
    if (leftIndex <= length && length < rightIndex) {
        if (array[index] < array[leftIndex]) {
            utils_1.swap(array, index, leftIndex);
            buildMaxHeap(array, leftIndex, length);
        }
    }
    // 存在两个节点
    if (rightIndex <= length) {
        var maxIndex = (array[leftIndex] < array[rightIndex]) ? rightIndex : leftIndex;
        if (array[index] < array[maxIndex]) {
            utils_1.swap(array, index, maxIndex);
            buildMaxHeap(array, maxIndex, length);
        }
    }
};
exports.heapSort = function (array) {
    // 将待排序数组堆化
    heapify(array);
    for (var i = array.length - 1; i > 0; i--) {
        // 最大堆堆定元素一直最大
        utils_1.swap(array, 0, i);
        // 重新建堆 将最大元素调整到堆顶
        buildMaxHeap(array, 0, i - 1);
    }
};
