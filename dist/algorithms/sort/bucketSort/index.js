"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 桶排序实现
 * @author silverbulletlee
 */

const insertSort_1 = require("../insertSort");

exports.bucketSort = (array, bucketSize = array.length) => {
  // 创建桶并将元素分布到不同的桶中
  let min = Math.min(...array);
  let max = Math.max(...array);
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  let buckets = new Array(bucketCount).fill(null).map(() => []);

  for (let num of array) {
    let bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
  } // 对每个桶执行排序算法，将所有桶合并


  array.length = 0;

  for (let bucket of buckets) {
    bucket.length && array.push(...insertSort_1.insertSort(bucket));
  }

  return array;
};