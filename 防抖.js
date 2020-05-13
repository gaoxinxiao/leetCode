

function PreShake(fn, time = 1000) {
    var timeFun = null;
    return function () {
        if (timeFun != null) clearTimeout(timeFun);
        timeFun = setTimeout(fn, time);
    }
}



function Throttle(fn,wait){
    var timeFun;
    return function (){
        let context = this;
        let args = arguments;
        if (!timeFun) {
            timeFun = setTimeout(()=>{
                timeFun = null;
                fn.apply(context,args)
            },wait)
        }
    }
}

