function sum(list, val) {
    let arr = []
    for (var i = 0; i < list.length; i++) {
        let dfs = val - list[i]
        if (arr[dfs]!=undefined) {
           return [arr[dfs],i]
        }
        arr[nums[i]]=i
    }
    return arr
}

sum([1, 2, 3, 4], 5)