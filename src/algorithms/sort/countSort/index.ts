/**
 * @file 计数排序实现
 * @author silverbulletlee
 */

export const countSort = (array: number[]): number[] => {
    let table: number[] = [];
    let max: number = -Infinity;
    let min: number = Infinity;

    for (let i = 0; i < array.length; i++) {
        max = Math.max(max, array[i]);
        min = Math.min(min, array[i]);
        table[array[i]] ? table[array[i]]++ : 1;
    }

    array.length = 0;
    for (let j = min; j <= max; j++) {
        while (table[j] && table[j]--) {
            array.push(j);
        }
    }

    return array;
}