"use strict";
/**
 * @file 归并排序实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var merge = function (left, right) {
    var res = [];
    while (left.length && right.length) {
        left[0] <= right[0] ? res.push(left.shift()) : res.push(right.shift());
    }
    return res.concat(left, right);
};
exports.mergeSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var mid = array.length >>> 1;
    return merge(exports.mergeSort(array.slice(0, mid)), exports.mergeSort(array.slice(mid)));
};
