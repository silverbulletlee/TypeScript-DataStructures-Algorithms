"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 基数排序实现
 * @author silverbulletlee
 */
exports.radixSort = (array, baseRadix = 10) => {
    // 获取数组中最大值
    let max = Math.max(...array);
    // 获取数组中最大位数
    let maxDigit = 0;
    while (max > 0) {
        max = (max / baseRadix) >> 0;
        maxDigit++;
    }
    for (let digit = 0; digit <= maxDigit; digit++) {
        // buckets[baseRadix][]如果基于10进制排序，就需要10个桶
        let buckets = new Array(baseRadix).fill(null).map(() => []);
        // 每一位计算入桶
        for (let num of array) {
            buckets[((num / Math.pow(baseRadix, digit)) >> 0) % baseRadix].push(num);
        }
        let index = 0;
        // 重写数组
        for (let bucket of buckets) {
            for (let num of bucket) {
                array[index++] = num;
            }
        }
    }
    return array;
};
