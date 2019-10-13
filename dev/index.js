import { dataStructor, sort, dynamicPrograming, search } from '../src';

const {
    Stack,
    Queue,
    LinkedList,
    DoublyLinkedList,
    BinarySearchTree,
    Graph,
    MinHeap,
    MaxHeap
} = dataStructor;

const {
    bubbleSort,
    selectSort,
    insertSort,
    mergeSort,
    quickSort,
    heapSort,
    countSort,
    bucketSort,
    radixSort,
    shellSort
} = sort;

const {
    fibonacci,
    LCS
} = dynamicPrograming;

const {
    binarySearch
} = search;

const arr = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0];

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
console.log('linkedList.isEmpty', linkedList.isEmpty());
linkedList.append(15);
console.log('linkedList', linkedList);
linkedList.append(10);
console.log('linkedList', linkedList);
linkedList.append(11);
console.log('linkedList.size', linkedList.size());
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(10));
linkedList.remove(10);
console.log('linkedList.size', linkedList.size());
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(10));
linkedList.insert(1, 12);
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(12));
linkedList.removeAt(2);
linkedList.append(76);
linkedList.append(88);
console.log('linkedList.size()', linkedList.size());
console.log('linkedList.toString()', linkedList.toString());

// 双向链表
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(15);
console.log('doublyLinkedList', doublyLinkedList);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(10);
console.log('doublyLinkedList', doublyLinkedList);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(11);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.removeAt(1);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(18);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.remove(11);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(1, 6);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(0, 8);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(-1, 1);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(19, 6);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

console.log(arr);

// 冒泡排序 使用用例
console.log('bubbleSort', bubbleSort(Array.from(arr)));

// 选择排序 使用用例
console.log('selectSort', selectSort(Array.from(arr)));

// 插入排序 使用用例
console.log('insertSort', insertSort(Array.from(arr)));

// 归并排序 使用用例
console.log('mergeSort', mergeSort(Array.from(arr)));

// 快速排序 使用用例
console.log('quickSort', quickSort(Array.from(arr)));

// 堆排序 使用用例
console.log('heapSort', heapSort(Array.from(arr)));

// 计数排序 使用用例
console.log('countSort', countSort(Array.from(arr)));

// 桶排序 使用用例
console.log('bucketSort', bucketSort(Array.from(arr), 5));

// 基数排序 使用用例
console.log('radixSort', radixSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));

// 希尔排序使用用例
console.log('shellSort', shellSort(Array.from(arr)));


// 动态规划相关

// 斐波那契数列
// console.log('fibonacci', fibonacci(0));
console.log('fibonacci', fibonacci(1));
console.log('fibonacci', fibonacci(2));
console.log('fibonacci', fibonacci(3));
console.log('fibonacci', fibonacci(10));
console.log('fibonacci', fibonacci(20));

// 最长公共子序列
console.log('LCS', LCS('educational', 'advantage'));
console.log('LCS', LCS('didactical', 'advantage'));


// 二分查找
console.log('binarySearch', binarySearch(quickSort(Array.from(arr)), 5));

// 二叉树

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insertNode(7);
binarySearchTree.insertNode(15);
binarySearchTree.insertNode(5);
binarySearchTree.insertNode(3);
binarySearchTree.insertNode(9);
binarySearchTree.insertNode(8);
binarySearchTree.insertNode(10);
binarySearchTree.insertNode(13);
binarySearchTree.insertNode(12);
binarySearchTree.insertNode(14);
console.log('binarySearchTree', binarySearchTree);
console.log('binarySearchTree.preOrderRec', binarySearchTree.preOrderRec());
console.log('binarySearchTree.inOrderRec', binarySearchTree.inOrderRec());
console.log('binarySearchTree.inOrderRec', binarySearchTree.postOrder());

// 图
let graphInstance = new Graph();
let myVertices=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i=0; i < myVertices.length; i++){
    graphInstance.addVertex(myVertices[i]);
}
graphInstance.addEdge('A','B');
graphInstance.addEdge('A','C');
graphInstance.addEdge('A','D');
graphInstance.addEdge('C','D');
graphInstance.addEdge('C','G');
graphInstance.addEdge('D','G');
graphInstance.addEdge('D','H');
graphInstance.addEdge('B','E');
graphInstance.addEdge('B','F');
graphInstance.addEdge('E','I');
console.log('graphInstance', graphInstance.toString());
console.log('graphInstance.BFS', graphInstance.BFS());
console.log('graphInstance.getShortestPath', graphInstance.getShortestPath());
console.log('graphInstance.DFS', graphInstance.DFS());
console.log('graphInstance.DFSRec', graphInstance.DFSRec());


graphInstance = new Graph(true);//有向图
myVertices=['A','B','C','D','E','F'];
for (let i = 0; i < myVertices.length; i++) {
    graphInstance.addVertex(myVertices[i]);
}
graphInstance.addEdge('A','C');
graphInstance.addEdge('A','D');
graphInstance.addEdge('B','D');
graphInstance.addEdge('B','E');
graphInstance.addEdge('C','F');
graphInstance.addEdge('F','E');
console.log('graphInstance.DAG', graphInstance.DAG());



// 最小堆&最大堆
let minHeap = new MinHeap();
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(1);
console.log('minHeap.getMin', minHeap.getMin());
console.log('minHeap.size', minHeap.size());
console.log('minHeap.isEmpty', minHeap.isEmpty());
console.log('minHeap.toString', minHeap.toString());
minHeap.delMin();
console.log('minHeap.getMin', minHeap.getMin());
console.log('minHeap.size', minHeap.size());
console.log('minHeap.isEmpty', minHeap.isEmpty());
console.log('minHeap.toString', minHeap.toString());

let maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log('maxHeap.getMax', maxHeap.getMax());
console.log('maxHeap.size', maxHeap.size());
console.log('maxHeap.isEmpty', maxHeap.isEmpty());
console.log('maxHeap.toString', maxHeap.toString());
maxHeap.delMax();
console.log('maxHeap.getMax', maxHeap.getMax());
console.log('maxHeap.size', maxHeap.size());
console.log('maxHeap.isEmpty', maxHeap.isEmpty());
console.log('maxHeap.toString', maxHeap.toString());
