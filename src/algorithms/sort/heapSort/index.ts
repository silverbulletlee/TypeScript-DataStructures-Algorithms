/**
 * @file 堆排实现
 * @author silverbulletlee
 */

import { swap } from '@utils';

const getLeftIndex = (index: number): number => (index * 2 + 1);
const getRightIndex = (index: number): number => ((index + 1) * 2);
const getParentIndex = (index: number): number => ((index - 1) >> 1);

const heapify = (array: number[]): void => {
    let lastTreePos = getParentIndex(array.length - 1);
    for (let i = lastTreePos; i >= 0; i--) {
        buildMaxHeap(array, i, array.length);
    }
};

const buildMaxHeap = (array: number[], index: number, heapSize: number): void => {
    let leftIndex = getLeftIndex(index);
    let rightIndex = getRightIndex(index);

    // 没有子节点，因为堆是完全二叉树没有左节点必然没有右节点
    if (heapSize < leftIndex) {
        return;
    }
    // 只有左节点
    if (leftIndex <= heapSize && heapSize < rightIndex) {
        if(array[index] < array[leftIndex]) {
            swap(array, index, leftIndex);
            buildMaxHeap(array, leftIndex, heapSize);
        }
    }
    // 存在两个节点
    if (rightIndex <= heapSize) {
        let maxIndex = (array[leftIndex] < array[rightIndex])? rightIndex : leftIndex;

        if (array[index] < array[maxIndex]) {
            swap(array, index, maxIndex);
            buildMaxHeap(array, maxIndex, heapSize);
        } 
    }
};

export const heapSort = (array: number[]): number[] => {
    // 将待排序数组堆化
    heapify(array);
    for (let i = array.length - 1; i > 0; i--) {
        // 最大堆堆定元素一直最大
        swap(array, 0, i);
        // 重新建堆 将最大元素调整到堆顶
        buildMaxHeap(array, 0, i - 1);
    }

    return array;
};
