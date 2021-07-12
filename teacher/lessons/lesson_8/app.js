console.time('for');
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
    text += cars[i];
    i++;
}
console.timeEnd('for');

console.time('while');
const anotherCars = ["BMW", "Volvo", "Saab", "Ford"];
let anotherI = 0;
let anotherText = "";

while (anotherCars[anotherI]) {
    anotherText += anotherCars[anotherI];
    anotherI++;
}
console.timeEnd('while');