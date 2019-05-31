"use strict";
/**
 * @file 快速排序实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var _utils_1 = require("@utils");
exports.quickSort = function (array, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length - 1; }
    if (start >= end) {
        return;
    }
    var i = start;
    var j = end;
    var pivotIndex = start;
    var pivot = array[pivotIndex];
    while (i < j) {
        while (i < j) {
            if (array[j] < pivot) {
                _utils_1.swap(array, j, pivotIndex);
                pivotIndex = j;
                break;
            }
            j--;
        }
        while (i < j) {
            if (array[i] > pivot) {
                _utils_1.swap(array, i, pivotIndex);
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
