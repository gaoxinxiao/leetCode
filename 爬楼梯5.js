
const climbStarts = function (n) {
    if (n <= 3) return n
    let prev = 2, next = 4, current = 3;
    while (n > 3) {
        next = prev
        prev = current
        current = next + prev
        n--
    }
    return current
}

climbStarts(30)
