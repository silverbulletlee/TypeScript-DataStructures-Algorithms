# 复杂度

str1长度为n，str2长度为m。

时间复杂度O(n * m)，空间复杂度为O(n * m)。

# 其他实现方式
递归实现，时间复杂度O(2^(m+n))，空间复杂度O(1)。时间复杂度极高，不可用。

```
const LCS = (str1: string, str2: string): number => {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }

    if (str1[0] === str2[0]) {
        return 1 + LCS(str1.substr(1), str2.substr(1));
    }

    return Math.max(LCS(str1, str2.substr(1)), LCS(str1.substr(1), str2));
};
```