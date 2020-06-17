/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//1.生成dp二维数组
//2.寻找dp方程
var uniquePaths = function (m, n) {
    //m代表列 j
    //n代表行 i
    let dp = Array.from(new Array(n+1), () => new Array(m+1).fill(1));
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[n-1][m-1];
};
/**
 *  [1,1,1,1],
 *  [1,2,3,1],
 *  [1,3,6,7],
 * */ 
uniquePaths(7, 3);