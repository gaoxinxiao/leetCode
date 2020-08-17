/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    let dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0))

    for (var i = 0; i < s.length; i++) {
        dp[i][i] = true
    }

    let len = 1;
    let bging = 0;

    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] != s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && j - i + 1 > len) {
                len = j - 1 + 1
                bging = i
            }
        }
    }
    return s.substring(bging,len+1)
};
longestPalindrome('babad');