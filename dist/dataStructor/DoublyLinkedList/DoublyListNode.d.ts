/**
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */
import { ListNode } from '../LinkedList/ListNode';
export declare type doublyListNodeType<T> = {
    val: T;
    prev: doublyListNodeType<T>;
    next: doublyListNodeType<T>;
} | null;
export declare class DoublyListNode<T> extends ListNode<T> {
    prev: doublyListNodeType<T>;
    next: doublyListNodeType<T>;
    constructor(val: T);
}
