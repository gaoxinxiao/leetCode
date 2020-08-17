let arr = [2, 1, 3, 6, 5, 4, 10, 8]

/**
 *  数组堆并排序 采用分治思想分解成每一个子项在进行比较
 * */
function sort(list) {
    if (list.length<=1) return list
    let index = Math.floor(list.length / 2);
    let left = list.slice(0, index)
    let right = list.slice(index, list.length)
    let mergeLeft = sort(left)
    let mergeRight = sort(right)
    return merge(mergeLeft,mergeRight)


    function merge(mergeLeft,mergeRight){
        let arr = [];
        while(mergeLeft.length && mergeRight.length){
            if (mergeLeft[0]<mergeRight[0]){
                arr.push(mergeLeft.shift())
            } else{
                arr.push(mergeRight.shift())
            }
        }
        while(mergeLeft.length) arr.push(mergeLeft.shift());
        while(mergeRight.length)arr.push(mergeRight.shift())
        return arr
    }

}
console.log(sort(arr))