# 二分查找

## 复杂度

常规查找要线性时间，即O(n)。

二分查找的时间复杂度为O(logn)。

使用条件：数组有序。

## 其他实现

递归实现，递归深度为O(logn)，每个递归实例时间复杂为O(1)，即递归实现复杂度也为O(logn)。

```  
const binarySearch = (array: number[], target: number, start: number = 0, end: number = array.length - 1): number => {
    if (start > end) {
        return -1;
    }

    let mid = (start + end) >> 1;

    if (array[mid] === target) {
        return mid;
    }

    return array[mid] < target
        ? binarySearch(array, target, mid + 1, end)
        : binarySearch(array, target, start, mid - 1);
};
s
```