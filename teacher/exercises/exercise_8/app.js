// #113

console.time('calculateSum');
const calculateSum = n => {
    var divider = 1,
        sum = 0;
    while (divider <= n) {
        sum += Math.floor(n / divider);
        divider *= 2;
    }
    return sum;
}

console.log(calculateSum(8));
console.log(calculateSum(9));
console.log(calculateSum(26));
console.timeEnd('calculateSum');

console.time('int_sum');
function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(8));
console.log(int_sum(9));
console.log(int_sum(26));
console.timeEnd('int_sum');