import { LinkedList } from '../../../src/dataStructor/LinkedList';

test('LinkedList', () => {
    let linkedList = new LinkedList<number>();

    expect(linkedList.isEmpty()).toBeTruthy();
    expect(linkedList.size()).toEqual(0);
    expect(linkedList.indexOf(1)).toEqual(-1);
    expect(linkedList.getHead()).toBeNull();
    expect(linkedList.toString()).toEqual('');

    expect(linkedList.append(15)).toEqual(1);
    expect(linkedList.append(10)).toEqual(2);
    expect(linkedList.append(11)).toEqual(3);

    expect(linkedList.isEmpty()).toBeFalsy();
    expect(linkedList.size()).toEqual(3);
    expect(linkedList.indexOf(11)).toEqual(2);
    expect(linkedList.getHead().val).toEqual(15);
    expect(linkedList.toString()).toEqual('15->10->11');

    expect(linkedList.remove(10)).toBeTruthy();
    expect(linkedList.remove(1)).toBeFalsy();

    expect(linkedList.insert(-1, 12)).toBeFalsy();
    expect(linkedList.insert(linkedList.size() + 1, 12)).toBeFalsy();
    expect(linkedList.insert(1, 12)).toBeTruthy();
    expect(linkedList.insert(linkedList.size(), 18)).toBeTruthy();
    expect(linkedList.insert(0, 16)).toBeTruthy();
    expect(linkedList.insert(2, 17)).toBeTruthy();

    expect(linkedList.removeAt(2)).toEqual(17);
    expect(linkedList.removeAt(0)).toEqual(16);

});
