/**
 * @file 链表节点类实现
 * @author silverbulletlee
 */

export type listNodeType<T> = {
    val: T;
    next: listNodeType<T>;
} | null;

export class ListNode<T> {
    public val: T;
    public next: listNodeType<T> = null;
    constructor(val: T) {
        this.val = val;
    }
}
