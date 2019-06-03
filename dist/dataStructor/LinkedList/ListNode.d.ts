/**
 * @file 链表节点类实现
 * @author silverbulletlee
 */
export declare type listNodeType<T> = {
    val: T;
    next: listNodeType<T>;
} | null;
export declare class ListNode<T> {
    val: T;
    next: listNodeType<T>;
    constructor(val: T);
}
