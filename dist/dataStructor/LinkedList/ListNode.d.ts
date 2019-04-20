/**
 * @file 链表节点类实现
 * @author silverbulletlee
 */
export declare type listNodeType = {
    val: any;
    next: listNodeType;
} | null;
export declare class ListNode {
    val: any;
    next: listNodeType;
    constructor(val: any);
}
