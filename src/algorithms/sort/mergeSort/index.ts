/**
 * @file 归并排序实现
 * @author silverbulletlee
 */

const merge = (left: number[], right: number[]): number[] => {
    let res = [];

    while (left.length && right.length) {
        left[0] <= right[0] ? res.push(left.shift()) : res.push(right.shift());
    }

    return res.concat(left.length ? left : right);
};

export const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    let mid = array.length >>> 1;

    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
};
