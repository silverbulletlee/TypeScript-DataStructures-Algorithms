"use strict";
/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};
