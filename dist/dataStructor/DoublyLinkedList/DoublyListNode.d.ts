/**
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */
import { ListNode } from '../LinkedList/ListNode';
export declare type doublyListNodeType = {
    val: any;
    prev: doublyListNodeType;
    next: doublyListNodeType;
} | null;
export declare class DoublyListNode extends ListNode {
    prev: doublyListNodeType;
    next: doublyListNodeType;
    constructor(val: any);
}
