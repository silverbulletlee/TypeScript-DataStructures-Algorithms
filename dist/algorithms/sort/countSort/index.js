"use strict";
/**
 * @file 计数排序实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSort = (array) => {
    let table = [];
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
        max = Math.max(max, array[i]);
        min = Math.min(min, array[i]);
        table[array[i]] ? table[array[i]]++ : 1;
    }
    array.length = 0;
    for (let j = min; j <= max; j++) {
        while (table[j] && table[j]--) {
            array.push(j);
        }
    }
    return array;
};
