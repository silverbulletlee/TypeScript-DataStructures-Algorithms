/**
 * @file 快速排序实现
 * @author silverbulletlee
 */

import { swap } from '@utils';

const quickSortHelper = (array: number[], start: number = 0, end: number = array.length - 1): void => {
    if (start >= end) {
        return;
    }
    let i = start;
    let j = end;

    let pivotIndex = start;
    let pivot = array[pivotIndex];

    while (i < j) {
        while (i < j) {
            if (array[j] < pivot) {
                swap(array, j, pivotIndex);
                pivotIndex = j;
                break;
            }
            j--;
        }
        while (i < j) {
            if (array[i] > pivot) {
                swap(array, i, pivotIndex);
                pivotIndex = i;
                break;
            }
            i++;
        }
    }

    quickSortHelper(array, start, pivotIndex - 1);
    quickSortHelper(array, pivotIndex + 1, end);
};

export const quickSort = (array: number[]): number[] => {
    quickSortHelper(array);
    return array;
};
