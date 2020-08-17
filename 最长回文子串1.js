/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    let dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0));
    let res = '';
    for (var i = s.length - 1; i >= 0; i--) {
        for (var j = i; j < s.length; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j-i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

longestPalindrome('babad');