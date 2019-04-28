import { dataStructor, sort } from '../src';

const {
    Stack,
    Queue,
    LinkedList
} = dataStructor;

const {
    bubbleSort,
    selectSort,
    insertSort,
    mergeSort,
    quickSort,
    heapSort
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

// LinkedList 使用用例
let linkedList = new LinkedList();
console.log('linkedList', linkedList.isEmpty());
linkedList.append(15);
linkedList.append(10);
console.log('linkedList', linkedList.getHead());
linkedList.append(11);
console.log('linkedList', linkedList.size());
console.log('linkedList', linkedList.isEmpty());
console.log('linkedList', linkedList.indexOf(10));
console.log('linkedList', linkedList.remove(10));
linkedList.insert(1, 12);
console.log('linkedList', linkedList.size());
console.log('linkedList', linkedList.removeAt(1));
console.log('linkedList', linkedList.toString());


console.log(arr);

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

// 堆排序 使用用例
heapSort(arrCopy = Array.from(arr));
console.log('heapSort', arrCopy);
