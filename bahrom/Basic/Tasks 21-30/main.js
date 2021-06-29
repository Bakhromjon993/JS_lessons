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

function max(a, b, c) {
    let max = 0
    if (a > b){
        max = a
    } else {
        max = b
    }
    if (max < c){
        max = с
    }
    return max
}

console.log(max(100, 25, 76))

function min(...args) {
    return Math.min(...args)
}

console.log(min(2,56,7))

/* TASK 32 */

function findNear(a, b) {
    if (a < 100 && b < 100){

    }
}