/**
 * @param {string} s
 * @return {boolean}
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。
 */
//1、循环遍历每个元素把第一个元素放到栈中 在循环的时候判断剩下的数据是否和栈顶的元素匹配如果匹配就弹出栈 否则 就继续压栈

var isValid = function (s) {
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    if (s.length%2) return false;
    var stack = [];//初始化一个栈
    for (var i = 0; i < s.length; i++) {
        if (map[stack[stack.length - 1]] == s[i]) {
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }
    if (stack.length == 0) return true;
    return false
};

isValid("{[]}}");

