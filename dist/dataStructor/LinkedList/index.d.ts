/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { listNodeType } from './ListNode';
export declare class LinkedList {
    private length;
    private head;
    append(val: any): number;
    removeAt(pos: number): any;
    isEmpty(): boolean;
    size(): number;
    indexOf(val: any): number;
    remove(val: any): listNodeType;
    getHead(): listNodeType;
    insert(pos: number, val: any): boolean;
    toString(): string;
}
