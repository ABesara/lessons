function getRandomNumber() {
    return Math.ceil(Math.random(0, 100) * 10);
}
// объявить  и инициализировать переменную x возвращаемым значением функции getRandomNumber();
// создать переменную condition и в нее записать условие проверки является ли четным значение переменной x
// если x четное число то вывести на консоль строку "Число ${x} четное и имеет тип ${тип x}"
// еслли x нечетное число то вывести на консоль строку "Число ${x} нечетное и имеет тип ${тип x}"
// если x нестрого равен нулю то выведите строку "x нестрого равен нулю";
var x = getRandomNumber();
console.log(x); 
++x; // +1
x = x + 1; // +1
x += 1; // +1
console.log(x);
var condition = x%2;
console.log('Переменная condition = ' + condition);
if (condition) {
    console.log( x + " число х нечетное и имеет тип " + typeof x);
    
} else {
    console.log(x +" четное и имеет тип " + typeof x);
}

console.log(Boolean(5466540));
if (14364) {
    console.log('Я всегда работаю');
}
if ( '0' == 0) {
    console.log('я тоже всегда работаю');
}
