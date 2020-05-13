/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//1.暴力解法当N小于0的情况处理x的值
var myPow = function (x, n) {
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    let ans = 1;
    for (var i = 0; i < N; i++) {
        ans = ans * x;
    }
    return ans;
};

//1.递归分治 找到最近重复子问题
//2.可以把n分解开计算 例如 n=10 可以是n/2 就是 n^5 这样最后算完可以相加 
//3.n/2 向下查找  当 n%2 == 0证明是偶数 就是 x * x n%2==1 证明是奇数  需要在多*x 因为 在n是5的情况 是 n%2==1 还会漏掉一个x


var myPow1 = function (x, n) {
    function firstPow(x, n) {
        if (n == 0) return 1.0;
        let half = firstPow(x, parseInt(n / 2));
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return firstPow(x, n)
};



console.log(myPow1(2.00000, 10))