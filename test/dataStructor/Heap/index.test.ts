import { MaxHeap, MinHeap } from '../../../src/dataStructor/Heap';
import { Heap } from '../../../src/dataStructor/Heap/Heap';

test('Heap', () => {
    class TestHeap<T> extends Heap<T> {
        protected siftUp(index: number): void {
            return;
        }
        protected siftDown(index: number): void {
            return;
        }
    }
    const testHeap = new TestHeap<number>();
    expect(testHeap.isEmpty()).toBeTruthy();
    expect(testHeap.toString()).toEqual(JSON.stringify([]));
});

test('MaxHeap', () => {
    let maxHeap = new MaxHeap<number>();

    expect(maxHeap.getMax()).toBeUndefined();
    expect(maxHeap.size()).toEqual(0);
    expect(maxHeap.isEmpty()).toBeTruthy();
    expect(maxHeap.toString()).toEqual(JSON.stringify([]));

    maxHeap.insert(0);
    expect(maxHeap.delMax()).toEqual(0);

    maxHeap.insert(0);
    maxHeap.insert(0);
    expect(maxHeap.delMax()).toEqual(0);
    expect(maxHeap.delMax()).toEqual(0);


    maxHeap.insert(4);
    maxHeap.insert(3);
    maxHeap.insert(2);
    expect(maxHeap.delMax()).toEqual(4);
    maxHeap.insert(4);

    maxHeap.insert(8);
    maxHeap.insert(7);
    maxHeap.insert(9);
    maxHeap.insert(5);
    maxHeap.insert(10);
    maxHeap.insert(1);
    maxHeap.insert(6);


    expect(maxHeap.getMax()).toEqual(10);
    expect(maxHeap.size()).toEqual(10);
    expect(maxHeap.isEmpty()).toBeFalsy();

    expect(maxHeap.delMax()).toEqual(10);
    expect(maxHeap.delMax()).toEqual(9);
    expect(maxHeap.delMax()).toEqual(8);
    expect(maxHeap.delMax()).toEqual(7);
    expect(maxHeap.delMax()).toEqual(6);
    expect(maxHeap.delMax()).toEqual(5);
    expect(maxHeap.delMax()).toEqual(4);
    expect(maxHeap.delMax()).toEqual(3);
    expect(maxHeap.delMax()).toEqual(2);
    expect(maxHeap.delMax()).toEqual(1);

});

test('MinHeap', () => {
    let minHeap = new MinHeap<number>();

    expect(minHeap.getMin()).toBeUndefined();
    expect(minHeap.size()).toEqual(0);
    expect(minHeap.isEmpty()).toBeTruthy();
    expect(minHeap.toString()).toEqual(JSON.stringify([]));

    minHeap.insert(2);
    minHeap.insert(3);
    minHeap.insert(4);
    expect(minHeap.delMin()).toEqual(2);
    minHeap.insert(2);

    minHeap.insert(8);
    minHeap.insert(7);
    minHeap.insert(9);
    minHeap.insert(5);
    minHeap.insert(10);
    minHeap.insert(1);
    minHeap.insert(6);

    expect(minHeap.getMin()).toEqual(1);
    expect(minHeap.size()).toEqual(10);
    expect(minHeap.isEmpty()).toBeFalsy();

    expect(minHeap.delMin()).toEqual(1);
    expect(minHeap.delMin()).toEqual(2);
    expect(minHeap.delMin()).toEqual(3);
    expect(minHeap.delMin()).toEqual(4);
    expect(minHeap.delMin()).toEqual(5);
    expect(minHeap.delMin()).toEqual(6);
    expect(minHeap.delMin()).toEqual(7);
    expect(minHeap.delMin()).toEqual(8);
    expect(minHeap.delMin()).toEqual(9);
    expect(minHeap.delMin()).toEqual(10);
});
