/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */

export enum compareEnmu {
    LESS_THAN = -1,
    EQUAL = 0,
    BIGGER_THAN = 1,
}

export type compareFunctionType<T> = (a: T, b: T) => compareEnmu;

export const swap = <T>(array: (T | number)[], i: number, j: number): void => {
    [array[i], array[j]] = [array[j], array[i]];
};

export const defaultCompare = <T>(a: T, b: T): compareEnmu => {
    if (a === b) {
        return compareEnmu.EQUAL;
    }
    return a < b ? compareEnmu.LESS_THAN : compareEnmu.BIGGER_THAN;
};
