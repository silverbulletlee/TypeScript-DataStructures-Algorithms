# 复杂度
时间复杂度 O(n), 空间复杂度O(1)。

# 其他实现方式

1. 时间复杂度 O(2^n)，时间复杂度过高，这种实现不可用。

```
const fibonacci = (n: number): number => n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
```

2. 记忆法，制表备查，时间复杂度O(n) 空间复杂度O(n)。多次获取斐波那契数可以使用时间复杂度可能降为O(1)。

```
const fibonacci = ((table: number[]): Function => (n: number): number  => (
    table[n]
    ? table[n]
    : (table[n] = fibonacci(n - 1) + fibonacci(n - 2))
))([1, 1]);
```

3. 动态规划，时间复杂度O(n) 空间复杂度O(1)。

```
const fibonacci = (n: number): number => {
    if (n < 0) {
        throw new Error('Uncaught RangeError: 参数超过斐波那契数列范围');
    }

    let first: number = 1;

    if (n < 2) {
        return first;
    }

    let second: number = first;
    let third: number = 0;

    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};
```


