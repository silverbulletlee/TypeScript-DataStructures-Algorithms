"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 冒泡排序实现
 * @author silverbulletlee
 */
var utils_1 = require("../../../utils");
exports.bubbleSort = function (array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                utils_1.swap(array, j, j + 1);
            }
        }
    }
};
