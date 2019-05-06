/**
 * @file 最长公共子序列(LCS: longest common subsequence)
 * @author silverbulletlee
 */

export const LCS = (str1: string, str2: string): number => {
    let dp: Array<Array<number>> = (new Array(str1.length + 1)).fill(0).map(() => (new Array(str2.length + 1).fill(0)));

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            str1[i - 1] === str2[j - 1]
            ? dp[i][j] = 1 + dp[i - 1][j - 1]
            : dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        }
        
    }
    return dp[dp.length - 1][dp[dp.length - 1].length - 1];
};
