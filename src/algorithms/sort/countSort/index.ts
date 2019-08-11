/**
 * @file 计数排序实现
 * @author silverbulletlee
 */

export const countSort = (array: number[]): number[] => {
    let table: number[] = [];
    let max: number = -Infinity;
    let min: number = Infinity;

    for (let num of array) {
        max = Math.max(max, num);
        min = Math.min(min, num);
        if (!table[num]) {
            table[num] = 0;
        }
        table[num]++;
    }

    array.length = 0;
    for (let i = min; i <= max; i++) {
        while (table[i] && table[i]--) {
            array.push(i);
        }
    }

    return array;
};
