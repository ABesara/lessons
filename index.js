var str1 = 'Hello';
var num = 123;

var boolean1 = false;
var obj = {
    a: 1
};

// property или свойство объекта иногда их называют fields - поля объекта
var user = {
    name: 'Alex',
    surname: 'Besarab',
    age: 33,
    married: false,
};


var num = 1;
var boolean = false;
var newVar = Number(boolean);
var newVar2 = String(boolean);
console.log(typeof newVar);
console.log(typeof newVar2);
console.log(str1 + boolean); // true всегда приводится к числу 1, false всегда приводится к числу 0