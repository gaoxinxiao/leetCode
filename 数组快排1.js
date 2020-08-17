let arr = [2, 1, 3, 6, 5, 4, 10, 8]
/**
 * 快排 取出中间的一个基准值把小于基准值的放左面大于基准值的放右面最后在进行合并
 * */
function sort(list) {
    if (list.length<=1) return list
    let index = Math.floor(list.length / 2);
    let base = list.splice(index,1)
    let left = []
    let right = []
    for (var i = 0; i < list.length; i++) {
        if (list[i] < base) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return sort(left).concat(base, ...sort(right))
}

console.log(sort(arr))