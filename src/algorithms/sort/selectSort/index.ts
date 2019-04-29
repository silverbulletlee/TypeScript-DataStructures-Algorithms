/**
 * @file 选择排序实现
 * @author silverbulletlee
 */

import { swap } from '../../../utils';

export const selectSort = (array: number[]): number[] => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, minIndex, i);
        }
    }

    return array;
};
