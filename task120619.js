
var str1 = '';
var str2 = ' ';
var str3;

// почему данный код работает и почему он работает именно таким образом
if (str2) {
    console.log('Условие 1 выполнено');
}

if (str1) {
    console.log('Я никогда не выполнюсь');
}

console.log(str1 == str1); // ???
console.log(str1 === str2); // ???
str3 = 'some string';
console.log(str2 === str3); // ???
console.log(str2 == str3); // ??


// Напишите код 
// Создайте переменную x и инициализируйте ее произвольным числом
// далее создайте переменную y которой присвойте результат выражения
// если x > 25 то выведите строку "${x} > 10 и имеет тип ${тип x}"
// если x > 50 то выведите аналогичную строку
// если x > 75 то выведите аналогичную строку для текущего условия 
// иначе выведите строку " ${x} < 100 и имеет тип ${тип x}"
// попробуйте сделать данную задачу оптимальным способом используя дополнительные переменные для условий и строки
// например x > 25 тоже самое что var y = 25; x > 25
