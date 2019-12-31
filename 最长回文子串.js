/**
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function (s) {
    let dp = [];
    for (let i = 0; i < s.length; i++) {
        dp[i] = [];
    }
    let max = -1, str = '';
    for (let k = 0; k < s.length; k++) {
        // k为所遍历的子串长度 - 1，即左下标到右下标的距离
        for (let i = 0; i + k < s.length; i++) {
            let j = i + k;
            // i为子串开始的左下标，j为子串开始的右下标
            if (k == 0) {
                // 当子串长度为1时，必定是回文
                dp[i][j] = true;
            }
            else if (k <= 2) {
                // 当子串长度为2时，两字符相同则符合回文，长度为3，首尾字符相同则符合回文

                if (s[i] == s[j]) {
                    console.log(i, 'iiiiiiiii')
                    console.log(j, 'jjjjjjjjj')
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = false;
                }
            }
            else {
                // 当子串长度超过3，取决于去掉头尾之后的子串是否回文并且首尾字符是否相同
                if (dp[i + 1][j - 1] && (s[i] == s[j])) {
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = false;
                }
            }

            if (dp[i][j] && k > max) {
                max = k;
                str = s.substring(i, j + 1)
            }
        }
    }
    return str;
};
// longestPalindrome('babad')
// longestPalindrome("aa")
// console.log(longestPalindrome("a"))


var len = 'aa'

for (let i = 0; i < len.length; i++) {
    for (let j = 0; j + i < len.length; j++) {
        console.log(i, 'iiiiiiiii')
        // console.log(j, 'jjjjjjjjj')
    }
}