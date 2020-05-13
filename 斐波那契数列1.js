
//普通递归版本
function fib(n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//缓存递归版本
var cache = [];//做缓存
function fib(n) {
    //证明缓存有值直接返回缓存的值
    if (n == 0) return 0;
    if (cache[n] != undefined) {
        return cache[n];
    }

    //如果缓存中没有数据
    if (n <= 2) {
        //将计算结果存入数组
        cache[n] = 1;
        return 1;
    }
    var temp = fib(n - 1) + fib(n - 2);
    cache[n] = temp;
    return temp
}



//循环版本
function fib(n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    let a1 = 1, a2 = 1, a3 = 0;
    while(n>=3){
        a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
        n--;
    }
    return a3;
}




console.log(fib(5))


