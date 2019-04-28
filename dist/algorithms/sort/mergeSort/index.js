"use strict";
/**
 * @file 归并排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var merge = function (left, right) {
    var res = [];
    while (left.length && right.length) {
        left[0] < right[0]
            ? res.push(left.shift())
            : res.push(right.shift());
    }
    return res.concat(left, right);
};
var mergeSortRec = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var mid = Math.floor(array.length / 2);
    return merge(mergeSortRec(array.slice(0, mid)), mergeSortRec(array.slice(mid)));
};
exports.mergeSort = function (array) {
    return mergeSortRec(array);
};
