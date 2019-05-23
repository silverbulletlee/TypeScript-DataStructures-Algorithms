# 归并排序

分治思想，分时间复杂度O(logn)，治（排序）O(n)。

时间复杂度：最O(nlogn)。

稳定性：稳定。

## 其他实现

迭代 原地排序 自底向上

```
const merge = (array: number[], start: number, mid: number, end: number): number[] => {
    let i = start;
    let j = mid;
    let res = [];

    while (i < mid && j < end) {
        array[i] < array[j]
        ? res.push(array[i++])
        : res.push(array[j++]);
    }

    res = i < mid
        ? res.concat(array.slice(i, mid))
        : res.concat(array.slice(j, end));

    for (let c = start; c < end; c++) {
        array[c] = res.shift();
    }
    return array;
};

const mergeSort = (array: number[]): number[] => {
    let step: number = 1;

    while (step < array.length) {
        for (let i = 0; i < array.length; i += (step * 2)) {
            let start = i;
            let end = array.length < (i + step * 2) ? array.length : (i + step * 2);
            let mid = i + step < array.length
                ? i + step
                : array.length
            // 归并的两个数组为 [start, mid) [mid, end)
            merge(array, start, mid, end);
        }
        step *= 2;
    }

    return array;
};
```