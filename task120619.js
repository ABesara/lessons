
// var str1 = '';
// var str2 = 'aa';
// var str3;
// console.log(Number(str2));
// console.log(0 == ''); // всегда приводится к числу и сравнивается
// console.log(0 == false);
// // console.log(str1.charCodeAt(0));
// console.log(str2 == false);
// // почему данный код работает и почему он работает именно таким образом
// if (str2) {
//     console.log('Условие 1 выполнено');
// }

// if (str1) {
//     console.log('Я никогда не выполнюсь');
// }

// console.log(str1 == str2); // ???
// console.log(str1 === str2); // ???
// str3 = 'some string';
// console.log(str2 === str3); // ???
// console.log(str2 == str3); // ??


// Напишите код 
// Создайте переменную x и инициализируйте ее произвольным числом
// далее создайте переменную y которой присвойте результат выражения
// если x > 25 то выведите строку "${x} > 10 и имеет тип ${тип x}"
// если x > 50 то выведите аналогичную строку
// если x > 75 то выведите аналогичную строку для текущего условия 
// иначе выведите строку " ${x} < 100 и имеет тип ${тип x}"
// попробуйте сделать данную задачу оптимальным способом используя дополнительные переменные для условий и строки
// например x > 25 тоже самое что var y = 25; x > y

var a = 'слово';
var b = ' новое';
var c = ' сегодня';
var d = ' конкатенация';
var g = ' строк';
var newSentence = a + b + c + d + g;
console.log(newSentence + ' и число сложим ' + 10);
var x = 27;
var y = 25;
if (x>y) {
    console.log(x + ">" + y + " и имеет тип " + typeof x);
    console.log('Верхняя граница равна: ' + y);
} else if (x>50) {
    console.log(x +"> 50 и имеет тип " + typeof x);
} else if (x>75){
    console.log(x +">75  и имеет тип " + typeof x);
} else  {
    console.log(x +"<100  и имеет тип " + typeof x);
}
x = 10;
if (25<x<50){
    console.log("things that you wanted?")
}

