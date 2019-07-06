"use strict";
/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var compareEnmu;
(function (compareEnmu) {
    compareEnmu[compareEnmu["LESS_THAN"] = -1] = "LESS_THAN";
    compareEnmu[compareEnmu["EQUAL"] = 0] = "EQUAL";
    compareEnmu[compareEnmu["BIGGER_THAN"] = 1] = "BIGGER_THAN";
})(compareEnmu = exports.compareEnmu || (exports.compareEnmu = {}));
exports.swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};
exports.defaultCompare = (a, b) => {
    if (a === b) {
        return compareEnmu.EQUAL;
    }
    return a < b ? compareEnmu.LESS_THAN : compareEnmu.BIGGER_THAN;
};
