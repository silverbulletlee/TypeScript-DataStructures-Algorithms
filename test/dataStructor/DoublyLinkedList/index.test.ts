import { DoublyLinkedList } from '../../../src/dataStructor/DoublyLinkedList';

// Uncovered Line 55 87 issue https://github.com/gotwarlost/istanbul/issues/35
test('DoublyLinkedList', () => {
    let doublyLinkedList = new DoublyLinkedList<number>();

    expect(doublyLinkedList.isEmpty()).toBeTruthy();
    expect(doublyLinkedList.size()).toEqual(0);
    expect(doublyLinkedList.getHead()).toBeNull();
    expect(doublyLinkedList.getTail()).toBeNull();
    expect(doublyLinkedList.indexOf(1)).toEqual(-1);
    expect(doublyLinkedList.removeAt(1)).toBeUndefined();
    expect(doublyLinkedList.removeAt(-1)).toBeUndefined();


    expect(doublyLinkedList.append(15)).toEqual(1);
    expect(doublyLinkedList.append(10)).toEqual(2);
    expect(doublyLinkedList.append(11)).toEqual(3);

    expect(doublyLinkedList.toString()).toEqual('15<=>10<=>11');
    expect(doublyLinkedList.indexOf(10)).toEqual(1);

    expect(doublyLinkedList.removeAt(5)).toBeUndefined();
    expect(doublyLinkedList.removeAt(0)).toEqual(15);
    expect(doublyLinkedList.removeAt(1)).toEqual(11);
    expect(doublyLinkedList.removeAt(0)).toEqual(10);

    expect(doublyLinkedList.insert(-1, 1)).toBeFalsy();
    expect(doublyLinkedList.insert(1, 1)).toBeFalsy();
    expect(doublyLinkedList.insert(0, 11)).toBeTruthy();
    expect(doublyLinkedList.insert(0, 15)).toBeTruthy();
    expect(doublyLinkedList.insert(1, 10)).toBeTruthy();
    expect(doublyLinkedList.insert(2, 9)).toBeTruthy();
    expect(doublyLinkedList.insert(2, 8)).toBeTruthy();

    expect(doublyLinkedList.toString()).toEqual('15<=>10<=>8<=>9<=>11');
    expect(doublyLinkedList.isEmpty()).toBeFalsy();
    expect(doublyLinkedList.size()).toEqual(5);
    expect(doublyLinkedList.getHead().val).toEqual(15);
    expect(doublyLinkedList.getTail().val).toEqual(11);
    expect(doublyLinkedList.indexOf(8)).toEqual(2);

    expect(doublyLinkedList.removeAt(2)).toEqual(8);
});
