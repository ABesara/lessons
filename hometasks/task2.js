function getRandomNumber() {
    return Math.ceil(Math.random(0, 100) * 10);
}
// вызов функции getRandomNumber();
// объвить переменную x и проинициализировать ее значеним null
// объявить переменную y и присвоить ей значение возвращаемое функцией getRandomNumber; 
// присвоить переменной x значение выражения y в квадрате + предекремент у + 10
// далее переменной x присвоить новое значение умножив сложив старое значение x c числом 5
// далее объявить переменную str1 и присвоить ей строку "Значение переменной"
// объявить str2 и присвоить значение "и имеет тип"
// Если x > 50 то вывести на консоль фразу "Значение переменной x равно ${x} и имеет тип ${тип икса}";
// Если x < 25 то вывести на консоль фразу "Второе условие выполнено"
// Так же после этой фразы на следующей строке вывести "Значение переменной x равно ${x} и имеет тип ${тип икса}";
// Во всех остальных случаях вывести на консоль фразу .. "Переменная x имеет значение ${x} и лежит в диапазоне от 25 до 50";
function doTask() {
    var x;
    x = null;
    var y;
    y = getRandomNumber();
    console.log(y);
    x = y * y + ++y + 10;
    console.log(x);
    x = x + 5;
    var str1;
    str1 = " значение переменной ";
    console.log(str1);
    var str2;
    str2 = " и имеет тип";
    if (x > 50) {
        console.log(str1 + "x " + x + str2 + " " + typeof (x)); 6
    } else if (x < 25) {
        console.log("второе условие выполнено");
        console.log(str1 + "x " + x + str2 + " " + typeof (x));
    } else {
        console.log(3);
    };
    console.log('Procedure ended');
}

doTask();
// doTask();
// doTask();