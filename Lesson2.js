
var x1 = 5;
var x2 = 15;
console.log(x1 + x2); // 20
console.log(x1 - x2); // - 10
var y1 = 'hello';
var y2 = 'world';
console.log(y1 + y2); // конкатенация строк
var z0 = y1 + x1;
console.log(z0);
z0 = x1 + y2;
console.log(z0);
console.log(5 * 6);
console.log(x1 * x2 - 5);
var expression = x1 * x2 + 10;
console.log(expression);
expression = 2 * (50 - 40);
console.log(expression);
console.log(45 / 5); // 9
console.log(x2 / 3); // 5
// операторы +, -, * , /, %

// Довольно часто бывает, что нам необходимо узнать...четное число или нет
// Сделать это можно с помощью оператора %
// Например
console.log(15 % 4);
console.log(5 % 2); // остаток будет 1, число 5 нечетное
console.log(8 % 2); // остаток будет 0, число 8 четное

console.log(23 % 2); // остаток будет 1, число 23 нечетное
console.log(1024 % 2); // остаток будет 0, число 1024 четное

// отсюда следует, что если выполнить выражение n % 2, где n - произвольное целое число...то остаток 0 будет у четных чисел и остаток 1 у нечетных

// есть специальный тип NaN который не является числом Not A Number
console.log('string' / 2);
var varNaN = 'string' * 2;
console.log('Проверка переменной, является ли она типом NaN: ' + isNaN(varNaN)); // isNan специальная функция для проверки, является ли входящий аргумент типом NaN

let infinity = 1 / 0; // выведет Infinity, на ноль делить нельзя...поэтому создали специальное значение 
console.log(infinity);
console.log('Проверка переменной, является ли она типом Infinity: ' + isFinite(varNaN)); // функция isFinite проверяет является ли аргумент конечным значением


var x = 2;
var y = 4;

// выведем различные уравнения на консоль
console.log(x * 2); // 4
console.log(x * 2 + 1); // 5
console.log(x * x / y); // 1
console.log(-y / x); // -2
console.log(--y + 2 * 2); // 7

// инкрементирование и декрементирование. !!!! внимательно прочтите текстовые материалы...это важный нюанс
console.log('------------------------');
var foo = 12;
console.log(foo++); // 12 , увеличиваем переменную foo на 1
console.log(foo); // 13 переменная изменилась на 1, после инкрементирования
console.log(++foo); // 14 , здесь переменная изменилась сразу после инкрементирования
console.log(foo);
console.log('------------------------');
// примеры , обратите внимание на то как можно объявлять переменные с помощью оператора ","
// это закомментированный код равносилен тому, что ниже. В целом я бы вам рекомендовал всегда писать ключевое слово перед именем переменной
// это сделает ваш код более читабельным и более понятным
/** закомментированный вариант более предпочтителен !!!
var a = 4;
var b = 3;
var c = a + b;  
 */
var a = 4,
    b = 3,
    c = (a + b);

console.log('Значение а: ' + a + ' значение b: ' + b + ' значение c: ' + c);
console.log('------------------------');
// Признак плохого кода...это объявления переменных без инициализации их.
// Если например значение будет присвоено позже и в данный момент его нет. То всегда присваивайте - специальный тип null;
var undefinedVariable; // плохо
var nulledVariable = null; // хорошо

console.log(undefinedVariable); // undefined
console.log(nulledVariable); // null

// а далее например можем уже присвоить новые значения
undefinedVariable = 'defined';
nulledVariable = 123;

console.log('Переменная nulledVariable равна: ' + 123 + ' и имеет тип: ' + (typeof nulledVariable)); // пример конкатенации различных переменных в одну строку
console.log(undefinedVariable);

// предлагаю вам поразмышлять на тему, почему нужно присваивать null если значения в текущий момент нет


// Объект
var user = {
    name: 'admin'
};

// функция
function fn() {
    return undefined;
}

console.log(fn()); // undefined

console.log('Тип объекта: ' + typeof user);
console.log('Тип функции: ' + typeof fn); // выведет function
console.log(typeof fn === 'function'); // true

// Но типа данных функция на самом деле нет!!! Функция это тоже объект... об этом мы поговорим позже...когда будем рассматривать фунции более детально