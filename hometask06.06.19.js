// x^2 + 3* y + 25 
// необходимо высчитать значения этого уравнения для x = 1, y = 3
// далее необходимо полученный результат уравнения записать в переменную z
// далее сделать пост инкрементацию z
// и вывести на консоль...
// если z больше 50 то выводим соответственно словами "переменная Z больше 50 и имеет тип number"
// если z больше 25 то выводим аналогичную строку только с условием "больше 25"
// во всех остальных случаях делаем преинкремент переменной z и делаем ее приведение к сточному типу данных явным способом
var x = 1, y = 3;
var z = x*x + 3*y + 25; 
console.log(z);
z = ++z;
console.log(z);
if (z>50) {
    console.log("переменная Z больше 50 и имеет тип " + typeof z);
} else if (z>25) { 
    console.log("переменная Z больше 25 и имеет тип " + typeof z);
    z = ++z;
    z = String(z);
    console.log('переменная z=' + z + ' и имеет тип: ' + typeof z);
} else {

};

var str1 = 'какая нибудь строка';
var str2 = 'еще блядь строка';
var str3 = 'новая строка';
console.log(str1 + ' ' + str2 + ' ' + str3);
