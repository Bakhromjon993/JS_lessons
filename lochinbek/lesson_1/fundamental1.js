// exercise 23. not done.

// exercise 24.

// const loverCase = (word) => {
//     let arr = [...word],
//         firsLetter = arr.shift().toLowerCase();
//     arr.unshift(firsLetter);
//     return arr.join('');
// }
// console.log(loverCase('APPLE'))


// exercise 25. not ready
// let mas1 = ['a', 'b', 'c', 'r'],
//     mas2 = [1, 2, 4, 5];
// mas1.forEach(x => {
//     mas2.forEach(y => {
//         console.log(x.concat(y));
//     })
// })


// exercise 26.

// const true_false = (val) => {
//     if (val === 'Y' || val === 'y' || val === 'yes') {
//         return true;
//     } else if (val === 'N' || val === 'n' || val === "No") {
//         return false
//     }
// }
// console.log(true_false('Y'));
// console.log(true_false('n'));
// console.log(true_false('No'));
// console.log(true_false('yes'));


// exercise 27 not done.


// exercise 28 not done.
// const time_taken = callback => {
//     const result = callback();
//     return result;
// };
// mapper = time_taken(() => Math.pow(2, 5));
// console.log(mapper);


// exercise 29.

// const convertNumber = num => {
//     let numArray = [],
//         firstNumber = 0,
//         lastNumber = 0;
//     numArray = num.toString().split('.');
//     firstNumber = parseInt(numArray[0]);
//     lastNumber = parseInt(numArray[1].charAt(0));
//     if (lastNumber >= 5) {
//         return firstNumber + 1
//     } else {
//         return firstNumber
//     }
// }
// console.log(convertNumber(123.52));

// exercise 30.

// const sortNumber = (numArray, ...numbers) => {
//     let nums1 = [];
//     for (let i = 0; i < numArray.length; i++) {
//         if (!numbers.includes(numArray[i])) {
//             nums1.push(numArray[i])
//         }
//     }
//     return nums1
// }
//
// console.log(sortNumber([5, 3, 4, 1, 9, 7], 4, 3, 1, 9, 60, 55));