/* TASK 21 */

// function addName(string) {
//     let as = string.slice(0,2)
//     if (as === 'Py'){
//         console.log(string)
//     } else {
//         let newS = "Py" + string
//         console.log(newS)
//     }
// }
// addName('thon')

/* TASK 22 */

// function removeChar(string, charInd) {
//     let part1 = string.substring(0, charInd)
//     let part2 = string.substring(charInd + 1, string.length)
//     return part1 + part2
// }
// console.log(removeChar('w3resource', 5))

/* TASK 23 */

// function change(string) {
//     if (string.length <= 1){
//        return string
//     } else {
//         let first = string.substring(0, 1)
//         let last = string.substring(string.length, string.length - 1)
//         let mid = string.substring(1, string.length - 1)
//         let val = last + mid + first
//         console.log(string[string.length - 1] + mid + string[0])
//     }
// }
// change('string')

/* TASK 24 */

// function addChar(string) {
//     let val = string[0] + string + string[0]
//     return val
// }
//
// console.log(addChar('Swift'))

/* TASK 25 */

// function numCheck(num) {
//     if (num > 0 ){
//         if (num % 3 === 0 || num % 7 === 0){
//             return true
//         }
//     }
// }
//
// console.log(numCheck(10))

/* TASK 26 */

// function addString(string) {
//     let val = string.substring(string.length, string.length - 3) + string + string.substring(string.length, string.length - 3)
//     console.log(val)
// }
// checkNum('Swift')

/* TASK 27 */

// function stringCheck(string) {
//     return string.startsWith('Java')
// }
//
// console.log(stringCheck('Javasadasds'))

/* TASK 28 */

// function checkNum(number, num2) {
//     // return number.range(50, 99)
//     return (number >= 50 && number <= 99 || num2 >= 50 && num2 <= 99);
// }
//
// console.log(checkNum(100, 52))

/* TASK 29 */

// function checkNum(number, num2, num3) {
//     // return number.range(50, 99)
//     return ((number >= 50 && number <= 99) || (num2 >= 50 && num2 <= 99) || num3 >= 50 && num3 <= 99);
// }
//
// console.log(checkNum(1, 2, 99))

/* TASK 30 */

// function checkString(str) {
//     let mid = str.slice(str.length - 6)
//     if (mid === 'script' || mid === 'Script'){
//         return str.substring(0, str.length - 6)
//     } else {
//         return str
//     }
// }
//
// console.log(checkString('Cdsada'))

/* TASK 31 */

// function max(a, b, c) {
//     let max = 0
//     if (a > b){
//         max = a
//     } else {
//         max = b
//     }
//     if (max < c){
//         max = с
//     }
//     return max
// }
//
// console.log(max(100, 25, 76))
//
// function min(...args) {
//     return Math.min(...args)
// }
//
// console.log(min(2,56,7))

/* TASK 32 */

// function closeTo(x,y) {
//      if (x !== y){
//           let valx = 100 - x
//           let valy = 100 - y
//           if (valx > valy){
//                return y + ' is closer to 100 than ' + x
//           } else {
//                return x + ' is closer to 100 than ' + y
//           }
//      }
// }
//
// console.log(closeTo(11, 80))

/* TASK 33 */

// function findNear(a, b) {
//      return (a >= 40 && a <= 60 && b >= 40 && b <= 60)
//         ||
//         (a >= 70 && a <= 100 && b >= 70 && b <= 100);
// }
//
// console.log(findNear(44, 56));
// console.log(findNear(70, 95));
// console.log(findNear(50, 89));

/* TASK 34 */

// function higherNum(x, y) {
//      if (x >= 40 && x <= 60 && y >= 40 && y <= 60){
//           if (x > y){
//                return x + ' is larger'
//           } else {
//                return y + ' is larger'
//           }
//      } else {
//           return "Out of scope"
//      }
// }
//
// console.log(higherNum(45, 60));
// console.log(higherNum(25, 60));
// console.log(higherNum(45, 80));

/* TASK 35 */

// function check_char(string, char) {
//      if (string){
//           return string.charAt(1) === char || string.charAt(3) === char
//      } else {
//           return "Please enter a sentence"
//      }
// }
//
// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));
// console.log(check_char("Console", "C"));
// console.log(check_char("Console", "e"));
// console.log(check_char("JavaScript", "S"));

/* TASK 36 */

// function check_digit(a, b, c) {
//      if (a > 0 && b > 0 && c > 0) {
//           if(a % 10 === b % 10 && b % 10 === c % 10 && c % 10 === a % 10){
//                return true
//           }
//      } else {
//           return false
//      }
// }
//
// console.log(check_digit(20, 30, 400));
// console.log(check_digit(-20, 30, 400));
// console.log(check_digit(20, -30, 400));
// console.log(check_digit(20, 30, -400));

/* TASK 37 */

// function threeChar(string) {
//     console.log(string.length)
//      if (string.length <= 3){
//           return string.toUpperCase()
//      } else {
//          let val = string.slice(3, string.length)
//          return (string.slice(0,3).toLowerCase()) + val
//      }
// }
//
// console.log(threeChar('HEREWEGO'))

/* TASK 38 */

// function exam_status(totmarks, is_exam) {
//     if (is_exam){
//         if (totmarks >= 90){
//             return 'Your final exam grade is A+'
//         } else {
//             return 'Your final exam grade is not A+'
//         }
//     }
// }
//
// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));

/* TASK 39 */

// function sumTwo(a, b) {
//     let c = a + b
//     if (c >= 50 && c <= 80){
//         return 65
//     }else {
//         return 80
//     }
// }
//
// console.log(sumTwo(10,60))

/* TASK 40 */

// function check_num(a, b) {
//     let c = a + b
//     let d = a - b
//     let t = b - a
//     return a === 8 || b === 8 || c === 8 || d === 8 || t === 8;
// }
//
// console.log(check_num(4, 10))