/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = dp[j] + dp[j - coins[i]]
        }
    }
    return dp[amount]
};

change(5, [1, 2, 5])



//原型继承 一句话总结 
//把父类的实例赋值给子类的原型 
//缺点是子类引用同一个引用类型会造成一个值更改另一个也会变动
function Person() { }

function son() { }

son.prototype = new Person()

var Son = new son()



//原型链 就是 当你去一个构造函数上找一个属性 找不到 会去 prototype上找 最后找不到返回undefined 
//原型链最顶层是null因为 Object.prototype.__proto__ //返回null