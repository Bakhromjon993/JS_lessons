var x, y, z; 
x = 5;          // Statement
y = 6; 
z = x + y;

function myFunction() {
    document.getElementById('title').innerHTML = "This is updated value";
    document.getElementById('title').style.fontSize = "35px";
}

console.log(myFunction);

document.querySelector("#button").addEventListener("click", myFunction);

console.log(new Number(5));
console.log(new String("This is string"));

console.log(5);
console.log("This is string");

// This is single line comment
/*This is multi 
line comment*/

var string2, 
    _string,
    camelCasedName,
    snake_cased_name,
    PascalCasedName;

var x = 3.14;
var car = "BMW";
var person = {
    name: "Sardor",
    age: 21
};
const calculate = number => number * 5;
const anotherCalc = function (number) {
    return number * 5;
};

function thirdCalc(number) {
    return number * 5;
};

const deliveryRate = 8.5;

var x = 5;
var z = ++x;
var y = z--;
x %= 5;
console.log(x, z, y);

console.log(!(4 === '4') && ('string' == 'another' || 7 == 7));