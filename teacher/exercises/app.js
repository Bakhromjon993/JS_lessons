
// Question # 1

// const compare = (primary, secondary) => {
//     var primaryKeys = Object.keys(primary),
//     secondaryKeys = Object.keys(secondary),
//     secondaryLen = secondaryKeys.length,
//     matches = 0;
//     for (var i = 0; i < secondaryLen; i++) {
//         if (primaryKeys.includes(secondaryKeys[i])) {
//             matches++;
//         }
//     }
//     return matches == secondaryLen ? true : false;
// };

// const data = compare({ name: "Bekzod", age: 34, country: "Uzbekistan" }, { name: "Shaxzod", age: 23 });

// console.log(data);


// const matches = (obj, source) =>
//   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: false })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false



////////////////// exercise 36

// const compareNums3 = (a, b, c) => {
// 	let x = getLastDigit(a),
// 		y = getLastDigit(b),
// 		z = getLastDigit(c);
// 	if (x === y && x === z && y === z) {
// 		return true;
// 	}
// 	return false;
// }

// const getLastDigit = (number) => {
// 	let numStr = number.toString();
// 	return parseInt(numStr.charAt(numStr.length - 1));
// }

// console.log(compareNums3(12345, 12345, 13339));
// console.log(compareNums3(-23, 10, 20));
// console.log(compareNums3(100020, 510, 440));



// const compareNumbers = (numOne, numTwo, numThree) => {
// 	let a = numOne % 10,
// 		b = numTwo % 10,
// 		c = numThree % 10;
// 	return a == b && a == c && b == c;
// };

// console.log(compareNumbers(34, 564, 768));