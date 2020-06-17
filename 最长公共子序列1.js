/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//1.首先创建一个dp数组
var longestCommonSubsequence = function (text1, text2) {
    let dp = Array.from(new Array(text1.length + 1), () => new Array(text2.length + 1).fill(0));

    for (var i = 1; i <= text1.length; i++) {
        for (var j = 1; j <= text2.length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                //这里取最大值的原因是需要记录上一次计算的结果 例如上一次 两个字符串都有a记录为1了 如果不取最大值可能会被0替换调因为 默认二维数组都是0 所以需要把当前的值继续向下计算
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[text1.length][text2.length]
};

longestCommonSubsequence('abcde', 'ace');


