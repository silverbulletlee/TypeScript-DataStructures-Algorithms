/**
 * @file 归并排序实现
 * @author silverbulletlee
 */

const merge = (left: number[], right: number[]): number[] => {
    let res = [];

    while (left.length && right.length) {
        left[0] < right[0]
        ? res.push(left.shift())
        : res.push(right.shift());
    }

    return res.concat(left, right);
};

const mergeSortRec = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    let mid = array.length >> 1;

    return merge(mergeSortRec(array.slice(0, mid)), mergeSortRec(array.slice(mid)));
};

export const mergeSort = (array: number[]): number[] => {
    return mergeSortRec(array);
};
