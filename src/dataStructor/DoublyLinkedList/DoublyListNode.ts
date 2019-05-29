/**
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */
import { ListNode } from '../LinkedList/ListNode';

export type doublyListNodeType = {
    val: any;
    prev: doublyListNodeType;
    next: doublyListNodeType;
} | null;

export class DoublyListNode extends ListNode {
    public prev: doublyListNodeType = null;
    public next: doublyListNodeType = null;
    constructor(val: any) {
        super(val);
    }
};
