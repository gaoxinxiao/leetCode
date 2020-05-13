const arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];

const sory = Array.from(new Set(arr.sort((a, b) => a - b)));

const newArr = [];



for (let i = 0; i < sory.length; i++) {
    let tempArr = [sory[i]];
    let index = sory.length;
    for (let j = i + 1, count = 1; j < sory.length; j++ , count++) {
        if (sory[i] + count == sory[j]) {
            tempArr.push(sory[j]) 
        } else {
            index = j - 1;
            break;
        }
    }
    i = index;
    newArr.push(tempArr);
}

