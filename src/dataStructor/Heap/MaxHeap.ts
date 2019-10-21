/**
 * @file 最大堆类实现
 * @author silverbulletlee
 */

import { Heap } from './Heap';
import { swap, compareFunctionType, defaultCompare, compareEnmu } from '@utils';

export class MaxHeap<T> extends Heap<T> {
    constructor(compareFn: compareFunctionType<T> = defaultCompare) {
        super(compareFn);
    }
    getMax(): T {
        return this.getTop();
    }
    delMax(): T {
        return this.delTop();
    }
    protected siftUp(index: number): void {
        if (index <= 0) {
            return;
        }
        let parentIndex = Heap.getParentIndex(index);
        if (this.compareFn(this.heap[parentIndex], this.heap[index]) === compareEnmu.LESS_THAN) {
            swap<T>(this.heap, parentIndex, index);
            this.siftUp(parentIndex);
        }
    }
    protected siftDown(index: number): void {
        let leftIndex = Heap.getLeftIndex(index);
        let rightIndex = Heap.getRightIndex(index);

        let size = this.size();

        // 没有左子树，必然没有右子树，交换到了最后一层
        if (leftIndex >= size) {
            return;
        }
        // 只有左子树，说明交换也到了最后一层
        if (rightIndex >= size) {
            if (this.compareFn(this.heap[leftIndex], this.heap[index]) === compareEnmu.BIGGER_THAN) {
                swap<T>(this.heap, leftIndex, index);
            }
            return;
        }
        let maxIndex =
            this.compareFn(this.heap[leftIndex], this.heap[rightIndex]) === compareEnmu.BIGGER_THAN
                ? leftIndex
                : rightIndex;
        if (this.compareFn(this.heap[maxIndex], this.heap[index]) === compareEnmu.BIGGER_THAN) {
            swap<T>(this.heap, maxIndex, index);
            this.siftDown(maxIndex);
        }
    }
}
