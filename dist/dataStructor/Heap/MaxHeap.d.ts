/**
 * @file 最大堆类实现
 * @author silverbulletlee
 */
import { Heap } from './Heap';
import { compareFunctionType } from '@utils';
export declare class MaxHeap<T> extends Heap<T> {
    constructor(compareFn?: compareFunctionType<T>);
    getMax(): T;
    delMax(): T;
    protected siftUp(index: number): void;
    protected siftDown(index: number): void;
}
