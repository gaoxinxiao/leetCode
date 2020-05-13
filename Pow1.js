/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//1.采用分治思想 假如 是2 的10次方 正常 如果循环来写 需要计算十次
//2.如果使用分治 把十一分为二 变成 2^5 * 2^5 两个2的5次方相乘  
//3.可以把5继续拆分 拆分成 2^2 * 2^2有一点需要注意当n是奇数的时候比如是5 拆分成2 的2 次方 相当于是2的四次方 这样就漏掉一个x 
//4.所以需要判断一下 当是奇数的情况 n%2==1 ?half * half * x :  half * half;  奇数的情况需要多乘一个x  
//5.记得针对特殊情况判断 例如 n是负数或者是0 的情况


var myPow = function (x, n) {
    function firstPow(x, n) {
        if (n == 0) return 1.0;
        let half = firstPow(x, parseInt(n / 2));
        return n % 2 == 1 ? half * half * x : half * half
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return firstPow(x, n);
};