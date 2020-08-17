let arr = [6, 2, 1, 3, 9, 0, 1, 2];
//数组快排思想取中间值和其他值做比较大的放右面小的放左面一直递归

//快排 Ologn
function sort(arr) {
    if (arr.length <= 1) return arr
    let index = Math.floor(arr.length / 2)
    let base = arr.splice(index, 1);
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sort(left).concat(base, ...sort(right))
}

//堆并排序采用分治思想分成数组长度为1的最小单元进行比较 Ologn
function sort1(arr) {
    if (arr.length <= 1) return arr
    let index = Math.floor(arr.length / 2)
    let left = arr.slice(index, arr.length);
    let right = arr.slice(0, index);
    let larr = sort1(left)
    let rarr = sort1(right)

    function sortMerge(l, r) {
        let list = []
        while (l.length && r.length) {
            if (l[0] <= r[0]) {
                list.push(l.shift())
            } else {
                list.push(r.shift())
            }
        }
        while (l.length) list.push(l.shift());
        while (r.length) list.push(r.shift());
        return list
    }
    return sortMerge(larr, rarr)
}

//冒泡排序On2时间复杂度
function sort2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

