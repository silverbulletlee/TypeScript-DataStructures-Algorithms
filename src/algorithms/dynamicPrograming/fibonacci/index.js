"use strict";
/**
 * @file 斐波那契数列实现
 * @author silverbulletlee
 */
exports.__esModule = true;
exports.fibonacci = function (n) {
    var f = 0;
    var g = 1;
    while (0 < n--) {
        g = g + f;
        f = g - f;
    }
    return g;
};
