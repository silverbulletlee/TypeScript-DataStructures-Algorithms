/**
 * @file Queue 类实现
 * @author silverbulletlee
 */
export declare class Queue<T> {
    private queue;
    dequeue(): T | void;
    enqueue(ele: T): number;
    size(): number;
    isEmpty(): boolean;
    front(): T;
    clear(): void;
    print(): string;
}
