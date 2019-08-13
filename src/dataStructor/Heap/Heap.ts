/**
 * @file 堆抽象类实现
 * @author silverbulletlee
 */
import { compareFunctionType, defaultCompare } from '@utils';

export abstract class Heap<T> {
    static getParentIndex(index: number): number {
        return (index - 1) >>> 1;
    }
    static getLeftIndex(index: number): number {
        return index * 2 + 1;
    }
    static getRightIndex(index: number): number {
        return (index + 1) * 2;
    }
    protected heap: T[] = [];
    protected compareFn: compareFunctionType<T> = defaultCompare;
    constructor(compareFn: compareFunctionType<T> = defaultCompare) {
        this.compareFn = compareFn;
    }
    size(): number {
        return this.heap.length;
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
    insert(el: T): void {
        this.heap.push(el);
        this.siftUp(this.size() - 1);
    }
    toString(): string {
        return JSON.stringify(this.heap);
    }
    protected delTop(): T {
        let top = this.heap.shift();

        if (this.size() === 0) {
            return top;
        }
        this.heap.unshift(this.heap.pop());
        this.siftDown(0);
        return top;
    }
    protected getTop(): T {
        return this.heap[0];
    }
    protected abstract siftUp(index: number): void;
    protected abstract siftDown(index: number): void;
}
