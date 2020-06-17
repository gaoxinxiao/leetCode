/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//1.当text1或者text2为空的情况一定返回0
//2.寻找dp方程 dp[i][j] = d[i-1][j-1] + 1
var longestCommonSubsequence = function (text1, text2) {
    if (!text1 || !text2) return 0;
    let n = text1.length;
    let m = text2.length;
    let dp =  Array.from(new Array(n+1),()=> new Array(m+1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] =  Math.max( dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[n][m]
};

longestCommonSubsequence('abcde', 'ace');