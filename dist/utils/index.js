"use strict";
/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = function (array, i, j) {
    var _a;
    _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
};
