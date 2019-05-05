"use strict";
/**
 * @file 归并排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
const merge = (left, right) => {
    let res = [];
    while (left.length && right.length) {
        left[0] < right[0]
            ? res.push(left.shift())
            : res.push(right.shift());
    }
    return res.concat(left, right);
};
const mergeSortRec = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let mid = array.length >> 1;
    return merge(mergeSortRec(array.slice(0, mid)), mergeSortRec(array.slice(mid)));
};
exports.mergeSort = (array) => {
    return mergeSortRec(array);
};
