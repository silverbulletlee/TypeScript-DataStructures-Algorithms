/**
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */
import { ListNode } from '../LinkedList/ListNode';

export type doublyListNodeType<T> = {
    val: T;
    prev: doublyListNodeType<T>;
    next: doublyListNodeType<T>;
} | null;

export class DoublyListNode<T> extends ListNode<T> {
    public prev: doublyListNodeType<T> = null;
    public next: doublyListNodeType<T> = null;
    constructor(val: T) {
        super(val);
    }
}
