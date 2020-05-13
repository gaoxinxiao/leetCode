/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
    let max = 0;
    for (var i=0;i<h.length-1;i++){
        for (var j=i+1;j<h.length;j++){
            let area = (j-i) * Math.min(h[i],h[j]);
            max = Math.max(area,max);
        }
    }
    return max
};

var maxArea = function (h) {
    let max = 0;
    for (var i=0,j=h.length-1;i<j;){
        let minHei = h[i]<h[j]?h[i++]:h[j--];
        let area = (j-i+1)* minHei;
        max =Math.max(area,max);
    }
    return max
};


console.log(maxArea([1, 7, 6, 2, 5, 4, 8, 3, 7]))

