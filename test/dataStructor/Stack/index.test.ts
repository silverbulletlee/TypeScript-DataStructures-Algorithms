import { Stack } from '../../../src/dataStructor/Stack';


test('Stack', () => {
    let stack = new Stack<number>();

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.size()).toEqual(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();

    expect(stack.push(5)).toEqual(stack.size());
    expect(stack.push(8)).toEqual(stack.size());
    expect(stack.push(11)).toEqual(stack.size());

    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.size()).toEqual(3);
    expect(stack.peek()).toEqual(11);
    expect(stack.pop()).toEqual(11);

    expect(stack.print()).toEqual(JSON.stringify([5, 8]));

    stack.clear();

    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.size()).toEqual(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
});
