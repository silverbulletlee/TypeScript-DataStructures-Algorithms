/**
 * @file 链表节点类实现
 * @author silverbulletlee
 */

export type listNodeType = {
    val: any;
    next: listNodeType;
} | null;

export class ListNode {
    public val: any;
    public next: listNodeType = null;
    constructor(val: any) {
        this.val = val;
    }
};
