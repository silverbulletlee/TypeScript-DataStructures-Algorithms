"use strict";
/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var compare;
(function (compare) {
    compare[compare["LESS_THAN"] = -1] = "LESS_THAN";
    compare[compare["EQUAL"] = 0] = "EQUAL";
    compare[compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
})(compare = exports.compare || (exports.compare = {}));
exports.swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};
exports.defaultCompare = (a, b) => {
    if (a === b) {
        return compare.EQUAL;
    }
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
};
