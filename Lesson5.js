var x = '10';
var condition1 = x > 25;
var condition2 = x < 50;
console.log(condition1);
console.log(condition2);
if (x > 25 && x < 50) {
    console.log('Условное И');
}
// true && true = true
// true && false = false
// false && true = false
// false && false = false
// 1 && 1 = 1
// 1 && 0 = 0
// 0 && 1 = 0
// 0 && 0 = 0
var condition = x > 5 || typeof x === 'string' || x < 8;
if (condition) {
    console.log('sss');
}
console.log(Number('10'));
var cond4 = x < 25;
var cond5 = x > 75;
if (cond4 || cond5) {
    console.log('Я за интервалом');
}
// true || true = true
// true || false = true
// false || true = true
// false || false = false