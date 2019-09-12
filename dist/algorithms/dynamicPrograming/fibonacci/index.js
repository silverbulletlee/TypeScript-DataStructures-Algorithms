"use strict";
/**
 * @file 斐波那契数列实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.fibonacci = n => {
  let f = 0;
  let g = 1;

  while (0 < n--) {
    g = g + f;
    f = g - f;
  }

  return g;
};