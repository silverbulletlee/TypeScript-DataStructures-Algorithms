# 选择排序

时间复杂度：O(n^2)。

稳定性：稳定（array[j] < array[minIndex] < 换成 <= 则变成不稳定）。

相比冒泡排序，一次迭代中只交换一次元素，而冒泡可能交换n次。

## 其他实现

选择最大元素实现选择排序

```
const selectSort = (array: number[]): number[] => {
    let end = array.length;
    while (--end) {
        let maxIndex = 0;
        for (let i = 1; i <= end; i++) {
            if (array[maxIndex] <=  array[i]) {
                maxIndex = i;
            }
        }

        swap(array, maxIndex, end);
    }

    return array;
};
```
