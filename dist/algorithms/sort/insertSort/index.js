"use strict";
/**
 * @file 插入排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSort = function (array) {
    for (var i = 1; i < array.length; i++) {
        var temp = array[i];
        var j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
};
