/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { listNodeType } from './ListNode';
export declare class LinkedList<T> {
    protected _size: number;
    protected head: listNodeType<T>;
    isEmpty(): boolean;
    size(): number;
    indexOf(val: T): number;
    getHead(): listNodeType<T>;
    append(val: T): number;
    removeAt(pos: number): T | void;
    remove(val: T): T | void;
    insert(pos: number, val: T): boolean;
    toString(separator?: string): string;
}
