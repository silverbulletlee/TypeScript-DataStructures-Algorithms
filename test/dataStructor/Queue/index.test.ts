import { Queue } from '../../../src/dataStructor/Queue';


test('Queue', () => {
    let queue = new Queue<number>();

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toEqual(0);
    expect(queue.front()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();

    expect(queue.enqueue(5)).toEqual(queue.size());
    expect(queue.enqueue(8)).toEqual(queue.size());
    expect(queue.enqueue(11)).toEqual(queue.size());

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size()).toEqual(3);
    expect(queue.front()).toEqual(5);
    expect(queue.dequeue()).toEqual(5);

    expect(queue.print()).toEqual(JSON.stringify([8, 11]));

    queue.clear();

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toEqual(0);
    expect(queue.front()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
});
