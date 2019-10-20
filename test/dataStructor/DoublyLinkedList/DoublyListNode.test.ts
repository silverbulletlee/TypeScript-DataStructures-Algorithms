import { DoublyListNode } from '../../../src/dataStructor/DoublyLinkedList/DoublyListNode';

test('DoublyListNode', () => {
    let doublyListNode = new DoublyListNode<number>(1);
    expect(doublyListNode.val).toEqual(1);
    expect(doublyListNode.next).toBeNull();
    expect(doublyListNode.prev).toBeNull();


    let next = new DoublyListNode<number>(2);
    doublyListNode.next = next;
    next.prev = doublyListNode;

    expect(doublyListNode.next.val).toEqual(2);
    expect(next.prev.val).toEqual(1);
});
