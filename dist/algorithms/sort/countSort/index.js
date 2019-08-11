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
    for (let num of array) {
        max = Math.max(max, num);
        min = Math.min(min, num);
        if (!table[num]) {
            table[num] = 0;
        }
        table[num]++;
    }
    array.length = 0;
    for (let i = min; i <= max; i++) {
        while (table[i] && table[i]--) {
            array.push(i);
        }
    }
    return array;
};
