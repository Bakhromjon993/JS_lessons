console.time("While");
let i = 0,
    text = "";
while (i < 1000000) {
    text += i + ' ';
    i++;
}
console.timeEnd("While");

console.time("For");
let j = 0,
    anotherText = "";
for (; j < 1000000; j++) {
    anotherText += j + ' ';
} 
console.timeEnd("For");