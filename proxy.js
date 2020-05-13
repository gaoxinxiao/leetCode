
let obj = { a: 1 }

Reflect.defineProperty(obj, 'name', {
    "value": "1",
    enumerable: true
})

Reflect.deleteProperty(obj, 'name');



function fun() {
}

console.log(new fun())

console.log(Reflect.construct(fun,[]))