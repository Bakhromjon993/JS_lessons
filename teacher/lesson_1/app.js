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