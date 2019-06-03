/**
 * @file Stack类实现
 * @author silverbulletlee
 */
export declare class Stack<T> {
    private stack;
    size(): number;
    isEmpty(): boolean;
    peek(): T | void;
    push(ele: T): number;
    pop(): T | void;
    clear(): void;
    print(): string;
}
