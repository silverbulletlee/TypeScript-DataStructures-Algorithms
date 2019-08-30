# 快速排序

应用分而治之的思想，将待排序数组分为两个子序列，并不断递归得去排序子序列。要求前一序列中最大值小于后一序列中最小值。跟归并的核心在于合，而快速排序的核心在于分。

## 轴点 pivot

居于左侧的元素均小于轴点，居于右侧的元素均大于轴点。

有序序列中所有元素皆为轴点。

## 复杂度

时间复杂度O(nlog(n)), 最坏O(n^2)(每次轴点是待排序序列中最小或最大值)，空间复杂度O(1)。为不稳定排序。

## 其他实现

一行js代码实现快排，仅做理解快排思想，要是使用的话每次递归会生成新的数组产生额外的空间（O(nlogn)）。

```
const quickSort = (array: number[]): number[] => (
    array.length <= 1 
        ? array
        : quickSort(
            array
            .slice(1)
            .filter(num => num <= array[0])
        )
        .concat(
            array[0],
            quickSort(
                array
                .slice(1)
                .filter(num => num > array[0])
            )
        )
);
```
