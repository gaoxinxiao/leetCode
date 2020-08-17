
function isValid(s) {
    let map = {
        "{":"}",
        "[":"]",
        "(":")",
    }
    if (s % 2) return false
    let stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (map[stack[stack.length - 1]] == s[i]) {
            stack.pop()
            continue
        }
        stack.push(s[i])
    }
    console.log(stack)
}

isValid("{[]}}");

