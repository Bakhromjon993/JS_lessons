/* TASK 41 */

// function three_numbers(a, b, c) {
//     if (a === b && b === c) {
//         return 30
//     } else if(b === c || a === c || a === b){
//         return 40
//     } else {
//         return 20
//     }
// }
//
// console.log(three_numbers(8, 8, 8));
// console.log(three_numbers(8, 8, 18));
// console.log(three_numbers(8, 7, 18));

/* TASK 42 */

// function number_order(a, b, c) {
//     if (b > a && c > b){
//         return 'Strict mode'
//     } else if (c > b) {
//         return 'Soft mode'
//     } else {
//         return undefined
//     }
// }
//
// console.log(number_order(10,15,31));
// console.log(number_order(24,22,31));
// console.log(number_order(50,21,15));

/* TASK 43 */

// function same_last_digit(a, b, c) {
//     return a % 10 === b % 10 && c % 10 === a % 10;
// }
//
// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));

/* TASK 44 */

// function lessby20_others(a, b, c) {
//     return a >= 20 && (b > a || c > a) ||
//         b >= 20 && (a > b || c > b) ||
//         c >= 20 && (a > c || b > c);
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

/* TASK 45 */

// function test_number(a, b) {
//     let c = a + b
//     let d = a - b
//     let t = b - a
//     return (a === 15 || b === 15) || c === 15 || d === 15 || t === 15;
// }
//
// console.log(test_number(15, 9));
// console.log(test_number(25, 15));
// console.log(test_number(7, 8));
// console.log(test_number(25, 10));
// console.log(test_number(5, 9));
// console.log(test_number(7, 9));
// console.log(test_number(9, 25));

// /* TASK 46 */ need to clarify

// function valCheck(a, b) {
//     return (a % 7 === 0 || a % 11 === 0) || (b % 7 === 0 || b % 11 === 0);
// }
// console.log(valCheck(14, 21));
// console.log(valCheck(14, 20));
// console.log(valCheck(16, 20));

/* TASK 47 */

// function test_digit(x, y, n) {
//     if (n < 40 && n > 10000){
//         return false
//     } else {
//         if (n >= x && n <= y)
//             return true;
//         else
//             return false;
//     }
// }
//
// console.log(test_digit(40, 4000, 45));
// console.log(test_digit(80, 320, 79));
// console.log(test_digit(89, 4000, 30));


/* TASK 48 */

// function reverseString(string) {
//     return string.split('').reverse().join('')
// }
//
// console.log(reverseString('Reserve'))

// /* TASK 49 */ need to ask


/* TASK 50 */

// function capitilize(string) {
//     const arrofWords = string.split(' ')
//     const arrofWordsCased = []
//
//     for (let i=0; i<arrofWords.length; i++){
//         const word = arrofWords[i]
//         arrofWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
//     }
//     return  arrofWordsCased.join(' ')
// }
//
// console.log(capitilize('assa asdddddsa dsadas'))

/* TASK 51 */

// function toHours(num) {
//     let hour = Math.floor(num / 60)
//     let minutes = num % 60
//     return `It is ${hour} hours and ${minutes} minutes `
// }
//
// console.log(toHours(450))

/* TASK 52 */

// function alphabetOrder(string) {
//     return string.split('').map(a => a.charCodeAt(0)).sort((a, b) => a - b).map(b => String.fromCharCode(b)).join('')
// }
//
// console.log(alphabetOrder('Python'))

/* TASK 53 */

// function ab_Check(string) {
//     return (/a...b/).test(string) || (/b...a/).test(string)
// }
//
//
// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));

/* TASK 54 */

// function vowel_Count(string) {
//     return string.replace(/[^aeiou]/g, '').length
// }
//
// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));

/* TASK 55 */

// function equal_pt(string) {
//     let p = string.replace(/[^p]/g, '')
//     let t = string.replace(/[^t]/g, '')
//     if (p.length === t.length){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(equal_pt("paattpss"));
// console.log(equal_pt("paatps"));

/* TASK 56 */

// function division_string(n1, n2) {
//
//     n1 = 80;
//     n2 = 6;
//
//     var div = Math.round(n1 / n2).toString(),
//         result_array = div.split("");
//
//     if (div >= 1000) {
//         for (var i = div.length - 3; i > 0; i -= 3) {
//             result_array.splice(i, 0, ",");
//         }
//         result_array;
//     }
//     console.log(result_array);
// }
//
// console.log(division_string(80, 20))

/* TASK 57 */

// function copies(string, num) {
//     // if (num > 0){
//     //     return string.repeat(num)
//     // } else {
//     //     return string
//     // }
//     let word = ''
//     for (let i = 0; i < num; i++){
//         word += string
//     }
//     return word
// }
//
// console.log(copies('ass', 4))

/* TASK 58 */

// function cop(string, val) {
//     let lastLetters = string.slice(string.length - 3, string.length)
//     return lastLetters.repeat(val)
// }
//
// console.log(cop('Python', 5))

/* TASK 59 */

// function first_half(string) {
//     if (string.length % 2 === 0){
//         return string.substring(string.length / 2)
//     } else {
//         return string
//     }
// }
// console.log(first_half("Python"));
// console.log(first_half("JavaScript"));
// console.log(first_half("PHP"));

/* TASK 60 */

// function without_first_end(string) {
//     return string.substr(1, string.length - 2)
// }
//
// console.log(without_first_end('JavaScript'));
// console.log(without_first_end('JS'));
// console.log(without_first_end('PHP'));


// function sum(arr) {
//     const sum = (accumulator, val) => accumulator + val
//     return arr.reduce(sum)
// }
//
// console.log(sum([1,2,4]))

// function asd(a, b) {
//     let c = [0, 0]
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             c[0] += 1
//         } else if (a[i] < b[i]) {
//             c[1] += 1
//         }
//     }
//     return c
// }
//
// console.log(asd([17, 28, 30], [99, 16, 8]))

// function sum(arr) {
//     return arr.reduce((target, item) => {
//         return target + item
//     }, 0)
// }
//
// console.log(sum([1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249]))