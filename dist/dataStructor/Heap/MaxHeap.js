"use strict";
/**
 * @file 最大堆类实现
 * @author silverbulletlee
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Heap_1 = require("./Heap");

const _utils_1 = require("../../utils");

class MaxHeap extends Heap_1.Heap {
  constructor(compareFn = _utils_1.defaultCompare) {
    super(compareFn);
  }

  getMax() {
    return this.getTop();
  }

  delMax() {
    return this.delTop();
  }

  siftUp(index) {
    if (index <= 0) {
      return;
    }

    let parentIndex = Heap_1.Heap.getParentIndex(index);

    if (this.compareFn(this.heap[parentIndex], this.heap[index]) === _utils_1.compareEnmu.LESS_THAN) {
      _utils_1.swap(this.heap, parentIndex, index);

      this.siftUp(parentIndex);
    }
  }

  siftDown(index = 0) {
    let leftIndex = Heap_1.Heap.getLeftIndex(index);
    let rightIndex = Heap_1.Heap.getRightIndex(index);
    let size = this.size(); // 没有左子树，必然没有右子树，交换到了最后一层

    if (leftIndex >= size) {
      return;
    } // 只有左子树，说明交换也到了最后一层


    if (leftIndex < size && rightIndex >= size) {
      if (this.compareFn(this.heap[leftIndex], this.heap[index]) === _utils_1.compareEnmu.BIGGER_THAN) {
        _utils_1.swap(this.heap, leftIndex, index);
      }

      return;
    }

    let maxIndex = this.compareFn(this.heap[leftIndex], this.heap[rightIndex]) === _utils_1.compareEnmu.BIGGER_THAN ? leftIndex : rightIndex;

    if (this.compareFn(this.heap[maxIndex], this.heap[index]) === _utils_1.compareEnmu.BIGGER_THAN) {
      _utils_1.swap(this.heap, maxIndex, index);

      this.siftDown(maxIndex);
    }
  }

}

exports.MaxHeap = MaxHeap;