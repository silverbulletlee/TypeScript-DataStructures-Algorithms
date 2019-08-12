/**
 * @file 堆排实现
 * @author silverbulletlee
 */

import { swap } from '@utils';

const getParentIndex = (index: number): number => (index - 1) >>> 1;
const getLeftIndex = (index: number): number => index * 2 + 1;
const getRightIndex = (index: number): number => (index + 1) * 2;

const buildMaxHeap = (array: number[]): void => {
    let lastTreePos = getParentIndex(array.length - 1);
    for (let i = lastTreePos; i >= 0; i--) {
        heapify(array, i, array.length);
    }
};

const heapify = (array: number[], index: number, heapSize: number): void => {
    let leftIndex = getLeftIndex(index);
    let rightIndex = getRightIndex(index);
    // 没有子节点，因为堆是完全二叉树没有左节点必然没有右节点
    if (heapSize <= leftIndex) {
        return;
    }
    // 只有左节点
    if (leftIndex < heapSize && heapSize <= rightIndex) {
        if (array[index] < array[leftIndex]) {
            swap(array, index, leftIndex);
        }
        return;
    }
    // 存在两个节点
    let maxIndex = array[leftIndex] < array[rightIndex] ? rightIndex : leftIndex;

    if (array[index] < array[maxIndex]) {
        swap(array, index, maxIndex);
        heapify(array, maxIndex, heapSize);
    }
};

export const heapSort = (array: number[]): number[] => {
    let heapSize = array.length;
    // 将待排序数组堆化
    buildMaxHeap(array);
    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        // 重新建堆 将最大元素调整到堆顶
        heapify(array, 0, heapSize);
    }

    return array;
};
