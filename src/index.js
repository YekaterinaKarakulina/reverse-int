module.exports = function reverse (n) {
    var arr = [];
    arr = Math.abs(n).toString().split('');
    return arr.reverse().join('');
}