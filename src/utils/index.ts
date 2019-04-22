/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */

export const swap = (array: number[], i: number, j: number): void => {
    [array[i], array[j]] = [array[j], array[i]]
};
