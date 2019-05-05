"use strict";
/**
 * @file 快速排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
// 仅做理解快排思想，要是使用的话数据量大的时候会爆栈·····
const quickSortRec = (array) => (array.length <= 1
    ? array
    : quickSortRec(array
        .slice(1)
        .filter(num => num <= array[0]))
        .concat(array[0], quickSortRec(array
        .slice(1)
        .filter(num => num > array[0]))));
exports.quickSort = (array, start = 0, end = (array.length - 1)) => {
    if (start >= end) {
        return;
    }
    let i = start;
    let j = end;
    let pivotIndex = start;
    let pivot = array[pivotIndex];
    while (i < j) {
        while (i < j) {
            if (array[j] < pivot) {
                utils_1.swap(array, j, pivotIndex);
                pivotIndex = j;
                break;
            }
            j--;
        }
        while (i < j) {
            if (array[i] > pivot) {
                utils_1.swap(array, i, pivotIndex);
                pivotIndex = i;
                break;
            }
            i++;
        }
    }
    exports.quickSort(array, start, pivotIndex - 1);
    exports.quickSort(array, pivotIndex + 1, end);
    return array;
};
