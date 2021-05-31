var arr = [7, 3, 2, 1, 4, 5, 8, 6, 9];

//快排思想取出数组的中间值比较大的放右面小的放左面依次递归
function sort(arr) {
    if (arr.length < 2) return arr;
    let ind = Math.floor(arr.length / 2);
    let base = arr.splice(ind, 1);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sort(left).concat(base, ...sort(right))
}


//堆并排序思想把整个数组编程长度为一的数据挨个比较
function sort1(arr) {
    if (arr.length < 2) return arr;
    let ind = Math.floor(arr.length / 2);
    let left = arr.slice(0, ind)
    let right = arr.slice(ind, arr.length)
    let l = sort1(left)
    let r = sort1(right)
    return mergeSort(l, r)
    function mergeSort(l, r) {
        let arr = []
        while (l.length && r.length) {
            if (l[0] <= r[0]) {
                arr.push(l.shift())
            } else {
                arr.push(r.shift())
            }
        }
        while (l.length) arr.push(l.shift());
        while (r.length) arr.push(r.shift());
        return arr
    }
}