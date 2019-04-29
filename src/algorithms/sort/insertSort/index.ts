/**
 * @file 插入排序实现
 * @author silverbulletlee
 */

export const insertSort = (array: number[]): number[] => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }

    return array;
};
