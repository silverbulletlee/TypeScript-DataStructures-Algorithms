/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { listNodeType } from './ListNode';
export declare class LinkedList {
    protected _size: number;
    protected head: listNodeType;
    isEmpty(): boolean;
    size(): number;
    indexOf(val: any): number;
    getHead(): listNodeType;
    append(val: any): number;
    removeAt(pos: number): any;
    remove(val: any): listNodeType;
    insert(pos: number, val: any): boolean;
    toString(separator?: string): string;
}
