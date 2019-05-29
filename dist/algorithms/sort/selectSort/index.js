"use strict";
/**
 * @file 选择排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("@utils");
exports.selectSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            _utils_1.swap(array, minIndex, i);
        }
    }
    return array;
};
