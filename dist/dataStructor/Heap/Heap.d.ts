/**
 * @file 堆抽象类实现
 * @author silverbulletlee
 */
import { compareFunctionType } from '@utils';
export declare abstract class Heap<T> {
    static getParentIndex(index: number): number;
    static getLeftIndex(index: number): number;
    static getRightIndex(index: number): number;
    protected heap: T[];
    protected compareFn: compareFunctionType<T>;
    constructor(compareFn?: compareFunctionType<T>);
    size(): number;
    isEmpty(): boolean;
    insert(el: T): void;
    protected delTop(): T;
    protected getTop(): T;
    protected abstract siftUp(index: number): void;
    protected abstract siftDown(index: number): void;
}
