/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x<0){
        return '-'+rever(Math.abs(x));  
    } 
    return rever(x);
    function rever(x){
        x = x + "";
        let str = ''
        for (var i = x.length-1; i >=0 ; i--) {
            str+=x[i];
        }
        return str;
    }
};

console.log(reverse(12030))