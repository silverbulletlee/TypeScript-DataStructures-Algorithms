/**
 * @file 一些通用工具的方法
 * @author silverbulletlee
 */
export declare type compareFunctionType<T> = (a: T, b: T) => number;
export declare enum compareEnmu {
    LESS_THAN = -1,
    EQUAL = 0,
    BIGGER_THAN = 1
}
export declare const swap: <T>(array: (number | T)[], i: number, j: number) => void;
export declare const defaultCompare: <T>(a: T, b: T) => compareEnmu;
