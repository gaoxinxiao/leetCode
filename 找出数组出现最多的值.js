

var findval = function (arr) {
    let obj = {};
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++;
        }
        count = Math.max(obj[arr[i]], count)
    }

    for (key in obj) {
        if (obj[key] == count) {
           console.log({[key]:count})
        }
    }

}

findval(['a', 'c', 'a', 'b', 'e', 'o', 'o', 'a', 'e', 'a', 'o']);