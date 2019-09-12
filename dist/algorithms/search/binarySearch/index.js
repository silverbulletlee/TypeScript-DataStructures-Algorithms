"use strict";
/**
 * @file 二分查找实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = start + (end - start >>> 1);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};