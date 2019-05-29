/**
 * @file 双向链表类实现
 * @author silverbulletlee
 */
import { doublyListNodeType } from './DoublyListNode';
import { LinkedList } from '../LinkedList';
export declare class DoublyLinkedList extends LinkedList {
    protected head: doublyListNodeType;
    protected tail: doublyListNodeType;
    getTail(): doublyListNodeType;
    append(val: any): number;
    removeAt(pos: number): any;
    insert(pos: number, val: any): boolean;
    toString(separator?: string): string;
}
