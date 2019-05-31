"use strict";
/**
 * @file 最长公共子序列(LCS: longest common subsequence)
 * @author silverbulletlee
 */
exports.__esModule = true;
exports.LCS = function (str1, str2) {
    var dp = new Array(str1.length + 1).fill(0).map(function () { return new Array(str2.length + 1).fill(0); });
    for (var i = 1; i <= str1.length; i++) {
        for (var j = 1; j <= str2.length; j++) {
            str1[i - 1] === str2[j - 1]
                ? (dp[i][j] = 1 + dp[i - 1][j - 1])
                : (dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]));
        }
    }
    return dp[dp.length - 1][dp[dp.length - 1].length - 1];
};
