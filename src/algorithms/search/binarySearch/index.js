"use strict";
/**
 * @file 二分查找实现
 * @author silverbulletlee
 */
exports.__esModule = true;
exports.binarySearch = function (array, target) {
    var start = 0;
    var end = array.length - 1;
    while (start <= end) {
        var mid = start + ((end - start) >>> 1);
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
};
