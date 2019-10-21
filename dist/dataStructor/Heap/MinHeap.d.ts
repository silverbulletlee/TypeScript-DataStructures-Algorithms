/**
 * @file 最小堆类实现
 * @author silverbulletlee
 */
import { Heap } from './Heap';
import { compareFunctionType } from '@utils';
export declare class MinHeap<T> extends Heap<T> {
    constructor(compareFn?: compareFunctionType<T>);
    getMin(): T;
    delMin(): T;
    protected siftUp(index: number): void;
    protected siftDown(index: number): void;
}
