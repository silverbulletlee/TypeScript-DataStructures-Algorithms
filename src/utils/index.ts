/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */

export type compareFunctionType<T> = (a: T, b: T) => number;

export enum compare {
    LESS_THAN = -1,
    EQUAL = 0,
    BIGGER_THAN = 1,
}

export const swap = (array: number[], i: number, j: number): void => {
    [array[i], array[j]] = [array[j], array[i]];
};

export const defaultCompare = <T>(a: T, b: T): number => {
    if (a === b) {
        return compare.EQUAL;
    }
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
};
