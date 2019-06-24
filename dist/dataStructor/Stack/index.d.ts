/**
 * @file Stack类实现
 * @author silverbulletlee
 */
export declare class Stack<T> {
    private stack;
    size(): number;
    isEmpty(): boolean;
    peek(): T;
    push(ele: T): number;
    pop(): T;
    clear(): void;
    print(): string;
}
