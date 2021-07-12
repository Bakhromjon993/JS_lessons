// console.time('for');
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (;cars[i];) {
//     text += cars[i];
//     i++;
// }
// console.timeEnd('for');

// console.time('while');
// const anotherCars = ["BMW", "Volvo", "Saab", "Ford"];
// let anotherI = 0;
// let anotherText = "";

// while (anotherCars[anotherI]) {
//     anotherText += anotherCars[anotherI];
//     anotherI++;
// }
// console.timeEnd('while');


const traders = [
    {
        name: "Farhod",
        profit: 234
    },
    {
        name: "Eldor",
        profit: 45
    },
    {
        name: "Shodiyor",
        profit: 678
    },
    {
        name: "Shodiyona",
        profit: 450
    },
    {
        name: "Elshod",
        profit: 12
    }
];

for (let i = 0; i < traders.length; i++) {
    var totalProfit = 0;
    for (let j = 0; j < traders.length; j++) {
        if (i !== j) {
            totalProfit += traders[j]['profit'];
        }
    }
    console.log(totalProfit);
}