# 其他实现

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
