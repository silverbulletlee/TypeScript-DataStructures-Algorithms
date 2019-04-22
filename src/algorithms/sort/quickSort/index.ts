/**
 * @file 快速排序实现
 * @author silverbulletlee
 */

import { swap } from "../../../utils";

// 仅做理解快排思想，要是使用的话数据量大的时候会爆栈·····
const quickSortRec = (array: number[]): number[] => (
    array.length <= 1 
        ? array
        : quickSortRec(
            array
            .slice(1)
            .filter(num => num <= array[0])
        )
        .concat(
            array[0],
            quickSortRec(
                array
                .slice(1)
                .filter(num => num > array[0])
            )
        )
);

export const quickSort = (array: number[], start: number = 0, end: number = (array.length - 1)): void => {
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

    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
};
