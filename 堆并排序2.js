var arr = [6, 2, 3, 1, 4, 5, 1];

function sortArr(arr) {
    if (arr.length < 2) return arr;
    let index = Math.floor(arr.length / 2)
    let left = arr.slice(0, index)
    let right = arr.slice(index, arr.length)
    let larr = sortArr(left)
    let rarr = sortArr(right)

    return mergeSort(larr, rarr)
    function mergeSort(l, r) {
        let arr = []
        while (l[0] && r[0]) {
            if (l[0] < r[0]) {
                arr.push(l.shift())
            } else {
                arr.push(r.shift())
            }
        }
        while (r[0]) arr.push(r.shift());
        while (l[0]) arr.push(l.shift());
        return arr;
    }
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(new Date, i)
    }, 1000)
}
console.log(new Date, i)