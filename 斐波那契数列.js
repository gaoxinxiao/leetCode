let count = 0;
function Fb(n){
    count++
    if (n<=2) return 1;
    return Fb(n-1) + Fb(n-2);
}


function createFib(){
    var cache = [];//做缓存
    function fib(n){
        //证明缓存有值直接返回缓存的值
        if (cache[n]!=undefined) {
            return cache[n];
        }

        //如果缓存中没有数据
        if (n<=2) {
            //将计算结果存入数组
            cache[n] = 1;
            return 1;
        }
        var temp = fib(n-1)+fib(n-2);
        cache[n] = temp;
        return temp
    }
    return fib
}


let vcount = 0;

function Fibo(n) {
    vcount++;
	if(n <= 2) {
		return 1;
	}
	let pre = 1; //第一次循环pre是f(1)也就是1
	let next = 1; //第一次循环next是f(2)也就是1
	let n_value = 0; // 保存f(n)的值
	for(let i = 3; i <= n; i++) {
		n_value = pre + next;  //每一次循环n_value就是前两个数的和
		pre = next;  // 然后把next赋值给pre
		next = n_value;  //把新的n_value的值赋值给next
    } 
	return n_value;
}

console.log(Fibo(10),'for循环版本')//加到11 