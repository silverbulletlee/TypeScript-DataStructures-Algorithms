import { ListNode } from '../../../src/dataStructor/LinkedList/ListNode';

test('ListNode', () => {
    let listNode = new ListNode<number>(1);
    expect(listNode.val).toEqual(1);
    expect(listNode.next).toBeNull();

    listNode.next = new ListNode<number>(2);

    expect(listNode.next.val).toEqual(2);
});
