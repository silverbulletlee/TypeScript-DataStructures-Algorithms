/**
 * @file 希尔排序实现
 * @author silverbulletlee
 */

export const shellSort = (array: number[]): number[] => {
    for (let gap = array.length >>> 1; gap >= 1; gap >>>= 1) {
        for (let i = gap; i < array.length; i++) {
            let j = i;
            let temp = array[i];
            while (0 <= j - gap && temp < array[j - gap]) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
    }

    return array;
};
