/**
 * @file 二分查找实现
 * @author silverbulletlee
 */

export const binarySearch = (array: number[], target: number): number => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = (start + end) >> 1;

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
};
