"use strict";
/**
 * @file 最小堆类实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Heap_1 = require("./Heap");

const _utils_1 = require("../../utils");

class MinHeap extends Heap_1.Heap {
  constructor(compareFn = _utils_1.defaultCompare) {
    super(compareFn);
  }

  getMin() {
    return this.getTop();
  }

  delMin() {
    return this.delTop();
  }

  siftUp(index) {
    if (index <= 0) {
      return;
    }

    let parentIndex = Heap_1.Heap.getParentIndex(index);

    if (this.compareFn(this.heap[parentIndex], this.heap[index]) === _utils_1.compareEnmu.BIGGER_THAN) {
      _utils_1.swap(this.heap, parentIndex, index);

      this.siftUp(parentIndex);
    }
  }

  siftDown(index) {
    let leftIndex = Heap_1.Heap.getLeftIndex(index);
    let rightIndex = Heap_1.Heap.getRightIndex(index);
    let size = this.size(); // 没有左子树，必然没有右子树，交换到了最后一层

    if (leftIndex >= size) {
      return;
    } // 只有左子树，说明交换也到了最后一层


    if (rightIndex >= size) {
      if (this.compareFn(this.heap[leftIndex], this.heap[index]) === _utils_1.compareEnmu.LESS_THAN) {
        _utils_1.swap(this.heap, leftIndex, index);
      }

      return;
    }

    let minIndex = this.compareFn(this.heap[leftIndex], this.heap[rightIndex]) === _utils_1.compareEnmu.LESS_THAN ? leftIndex : rightIndex;

    if (this.compareFn(this.heap[minIndex], this.heap[index]) === _utils_1.compareEnmu.LESS_THAN) {
      _utils_1.swap(this.heap, minIndex, index);

      this.siftDown(minIndex);
    }
  }

}

exports.MinHeap = MinHeap;