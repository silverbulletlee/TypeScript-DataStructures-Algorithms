/**
 * @file 斐波那契数列实现
 * @author silverbulletlee
 */

export const fibonacci = (n: number): number => {
    let f: number = 0;
    let g: number = 1;

    while (0 < n--) {
        g = g + f;
        f = g - f;
    }

    return g;
};
