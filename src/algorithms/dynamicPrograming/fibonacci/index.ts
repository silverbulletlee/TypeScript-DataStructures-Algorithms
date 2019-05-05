/**
 * @file 斐波那契数列实现
 * @author silverbulletlee
 */
// 仅做示例
const fibonacci_demo0 = (n: number): number => n <= 2 ? 1 : fibonacci_demo0(n - 1) + fibonacci_demo0(n - 2);
// 记忆法 制表备查 时间复杂度 O(n) 空间复杂度O(n)
const fibonacci_demo1 = ((cache: number[]): Function => (n: number): number  => (
    cache[n]
    ? cache[n]
    : (cache[n] = fibonacci_demo1(n - 1) + fibonacci_demo1(n - 2))
))([1, 1, 1]);

// 动态规划 自顶向下改为自底向上
export const fibonacci = (n: number): number => {
    // if (n <= 0) {
    //     throw new Error('Uncaught RangeError: 参数超过斐波那契数列范围');
    // }

    // let first:number = 1;

    // if (n <= 2) {
    //     return first;
    // }

    // let second:number = first;
    // let third:number = 0;

    // for (let i = 3; i <= n; i++) {
    //     third = first + second;
    //     first = second;
    //     second = third;
    // }

    // return third;
    let f:number = 0;
    let g: number = 1;

    while (0 < n--) {
        g = g + f;
        f = g - f;
    }

    return g;
};
