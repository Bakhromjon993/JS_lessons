
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


const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: false })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false