"use strict";
/**
 * @file 堆排实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var _utils_1 = require("@utils");
var getLeftIndex = function (index) { return index * 2 + 1; };
var getRightIndex = function (index) { return (index + 1) * 2; };
var getParentIndex = function (index) { return (index - 1) >>> 1; };
var heapify = function (array) {
    var lastTreePos = getParentIndex(array.length - 1);
    for (var i = lastTreePos; i >= 0; i--) {
        buildMaxHeap(array, i, array.length);
    }
};
var buildMaxHeap = function (array, index, heapSize) {
    var leftIndex = getLeftIndex(index);
    var rightIndex = getRightIndex(index);
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
        var maxIndex = array[leftIndex] < array[rightIndex] ? rightIndex : leftIndex;
        if (array[index] < array[maxIndex]) {
            _utils_1.swap(array, index, maxIndex);
            buildMaxHeap(array, maxIndex, heapSize);
        }
    }
};
exports.heapSort = function (array) {
    // 将待排序数组堆化
    heapify(array);
    for (var i = array.length - 1; i > 0; i--) {
        // 最大堆堆定元素一直最大
        _utils_1.swap(array, 0, i);
        // 重新建堆 将最大元素调整到堆顶
        buildMaxHeap(array, 0, i - 1);
    }
    return array;
};
