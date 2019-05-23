# 冒泡排序

时间复杂度：最好O(n)（优化版），最坏O(n^2)。

稳定性：稳定（如果将if语句中 > 改为 >= 则变为不稳定排序）

## 其他实现

冒泡排序

```
const bubbleSort = (array: number[]): number[] => {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
};
```

优化实现1：每次冒泡结束之后，在下一次循环中检测数组是否有序，有序则终止排序。

```
const bubbleSort = (array: number[]): number[] => {

    let sorted: boolean = false;

    for (let i = 0; i < array.length; i++) {
        if (sorted) {
            return array;
        }

        sorted = true;

        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                sorted = false;
            }
        }
    }

    return array;
};
```

优化实现2：记录最后交换元素的位置，不断缩短下一次冒泡的终点。

```
const bubbleSort = (array: number[]): number[] => {
    let length: number = array.length;
    
    while (length > 1) {
        let lastSwapPos = 0;
        for (let i = 1; i < length; i++) {
            if (array[i - 1] > array[i]) {
                swap(array, i - 1, i);
                lastSwapPos = i;
            }
        }
        length = lastSwapPos;
    }

    return array;    
};
```