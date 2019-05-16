# 冒泡排序

时间复杂度：最好O(n)（优化过后），最坏O(n^2)。

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

优化实现1

```
const bubbleSort = (array: number[]): number[] => {

    let sorted: boolean = false;

    for (let i = 0; i < array.length; i++) {
        if (sorted) {
            return array;
        }

        sorted = true;

        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                sorted = false;
            }
        }
    }

    return array;
};
```

优化实现2

```
const bubbleSort = (array: number[]): number[] => {
    let start = 0;
    let end = array.length - 1;
    let last = start;

    while (start < (end = last)) {
        last = start;
        while (++start < end) {
            if (array[start - 1] > array[start]) {
                last = start;
                swap(array, start - 1, start);
            }
        }
    }

    return array;
};
```