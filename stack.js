

function stack() {
    this.data = [];
}


stack.prototype.push = function (e) {
    this.data.push(e);
}

stack.prototype.pop = function (e) {
    return this.data.pop();
}

stack.prototype.peek = function (e) {
    return this.data[0];
}

stack.prototype.clear = function (e) {
    this.data = [];
}

stack.prototype.length = function (e) {
   return this.data.length;
}



function isPalindromeStr(str){
    var strI = '';
    const Stack = new stack();

    for (var i=0;i<str.length;i++){
        Stack.push(str[i])
    }

    while(Stack.length()){
        strI += String(Stack.pop());   
    }

    if (strI == str){
        return true
    }
    return false
}

console.log(isPalindromeStr('abcdcbacc'));