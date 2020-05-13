/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var str = '';
    var len = 0;
    for (var i = 0; i < s.length; i++) {
        let index = str.indexOf(s[i]);
        if (index == -1) {
            str += s[i];
            len = len<str.length?str.length:len
        } else {
            str = str.substr(index + 1) + s[i];
        }
    }
    console.log(len)
    return len;
};
lengthOfLongestSubstring("nfpdmpi");

//解题思路 判断初始空字符串indexOf==-1 的情况追加字符串不等于-1说明出现重复了 重新赋值计算