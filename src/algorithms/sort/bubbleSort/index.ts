/**
 * @file 冒泡排序实现
 * @author silverbulletlee
 */
import { swap } from '../../../utils';

export const bubbleSort = (array: number[]): void => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};
