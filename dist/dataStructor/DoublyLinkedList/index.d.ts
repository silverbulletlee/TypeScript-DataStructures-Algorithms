/**
 * @file 双向链表类实现
 * @author silverbulletlee
 */
import { doublyListNodeType } from './DoublyListNode';
import { LinkedList } from '../LinkedList';
export declare class DoublyLinkedList<T> extends LinkedList<T> {
    protected head: doublyListNodeType<T>;
    protected tail: doublyListNodeType<T>;
    getTail(): doublyListNodeType<T>;
    append(val: T): number;
    removeAt(pos: number): T | void;
    insert(pos: number, val: T): boolean;
    toString(separator?: string): string;
}
