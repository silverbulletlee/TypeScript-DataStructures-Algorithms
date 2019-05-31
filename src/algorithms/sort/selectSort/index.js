"use strict";
/**
 * @file 选择排序实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var _utils_1 = require("@utils");
exports.selectSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
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
