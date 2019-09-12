"use strict";
/**
 * @file Queue 类实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

class Queue {
  constructor() {
    this.queue = [];
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue.shift();
  }

  enqueue(ele) {
    return this.queue.push(ele);
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[0];
  }

  clear() {
    this.queue.length = 0;
  }

  print() {
    return JSON.stringify(this.queue);
  }

}

exports.Queue = Queue;