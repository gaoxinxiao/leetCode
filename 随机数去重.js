

let arr = [
    'gxx',
    'wmh',
    'hcc',
    'lx',
    'wmy',
    'zz',
    'cxz',
    'gxj',
    'zws',
    'lll'
]


for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * arr.length);
    arr[random] = arr[arr.length-1];
    arr.length--
}