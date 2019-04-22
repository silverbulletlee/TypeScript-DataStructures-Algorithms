import { dataStructor, sort } from '../src';

const {
    Stack,
    Queue
} = dataStructor;

const {
    bubbleSort,
    selectSort,
    insertSort,
    mergeSort,
    quickSort
} = sort;

const arr = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0];
let arrCopy;
// Stack 使用用例
let stack = new Stack();

console.log('stack', stack.isEmpty());
stack.push(5);
stack.push(8);
console.log('stack', stack.peek());
stack.push(11);
console.log('stack', stack.size());
console.log('stack', stack.isEmpty());
stack.pop();
stack.pop();
console.log('stack', stack.size());
console.log('stack', stack.stack);

// Queue 使用用例
let queue = new Queue();

console.log('queue', queue.isEmpty());
queue.enqueue(5);
queue.enqueue(8);
console.log('queue', queue.front());
queue.enqueue(11);
console.log('queue', queue.size());
console.log('queue', queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log('queue', queue.size());
console.log('queue', queue.queue);


console.log(arr)

// 冒泡排序 使用用例
bubbleSort(arrCopy = Array.from(arr));
console.log('bubbleSort', arrCopy);

// 选择排序 使用用例
selectSort(arrCopy = Array.from(arr));
console.log('selectSort', arrCopy);

// 插入排序 使用用例
insertSort(arrCopy = Array.from(arr));
console.log('insertSort', arrCopy);

// 归并排序 使用用例
console.log('mergeSort', mergeSort(Array.from(arr)));

// 快速排序 使用用例
quickSort(arrCopy = Array.from(arr));
console.log('quickSort', arrCopy);
