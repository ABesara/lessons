var x1 = 3;
var x = 0; // число

if(x1 > 15) { // Проверяем условие... 

    console.log(x1 + ' больше > 15'); // условие выполнено

} else {
    console.log(x1 + ' меньше < 15'); // условие невыполнено
}

if( x == 0) { // true 
    console.log('x равно 0');
} else {
    console.log('x не равно нулю');
}

if( x == '1') { // всегда идет приведение к числу
   console.log('верхний');
   console.log('еще одна');
} else {
    console.log(typeof x);
}

if( 0 == '0') console.log('верно'); // сокращенная запись для if
else console.log('неверно');

if( 0 === '0') console.log('Строгое равенство. проверяет и тип и значение');
console.log(0 === 0);
console.log( true == 1); // true
console.log( true == '1'); // true
if( true == '3') console.log('Это верно?');

var a = 7;

if(a > 8) {
    console.log('a > 8');
} else if (a > 9) {
    console.log('a > 9');
} else if (a < 10){
    console.log('новый блок');
} else {
    console.log('Остальные случаи');
}