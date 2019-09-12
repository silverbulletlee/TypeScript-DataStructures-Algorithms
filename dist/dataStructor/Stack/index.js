"use strict";
/**
 * @file Stack类实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

class Stack {
  constructor() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.stack[this.size() - 1];
  }

  push(ele) {
    return this.stack.push(ele);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    return this.stack.pop();
  }

  clear() {
    this.stack.length = 0;
  }

  print() {
    return JSON.stringify(this.stack);
  }

}

exports.Stack = Stack;