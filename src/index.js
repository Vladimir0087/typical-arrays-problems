
exports.min = function min (array) {
    if (!array || array.length===0) return 0;
    return Math.min(...array);
}

exports.max = function max (array) {
    if (!array || array.length===0) return 0;
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if (!array || array.length===0) return 0;
    let sum = array.reduce((prev, item) => prev + item, 0);
    let avg = sum / array.length;
    return avg;
}
