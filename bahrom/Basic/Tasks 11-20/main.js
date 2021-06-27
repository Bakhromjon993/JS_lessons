/* TASK 11 */
// const getValue = document.getElementById('value')
// console.log(getValue.value)
// const farBtn = document.getElementById('far')
// const celcuisBtn = document.getElementById('cel')
// const result = document.getElementById('result')
//
// farBtn.addEventListener('click', () => {
//     result.innerHTML = (getValue.value * 9 / 5) + 32
// })
//
// celcuisBtn.addEventListener('click', () => {
//     result.innerHTML = (getValue.value - 32) * 5 / 9
// })
//
// /* TASK 12 */
// function getURL() {
//     const docURL = document.URL
//     const url = window.location.href
//     console.log(url)
//     console.log(docURL)
//     result.innerHTML = docURL
// }


/* TASK 13 */

// function myVarName(name, val) {
//    return this[name] = val
// }
//
// console.log(myVarName('settings', 'powerOn'))

/* TASK 14 */

// const filename = 'asd.docx'
// console.log(filename.split('.').pop())

/* TASK 15 */

// function getDifference(number) {
//     if (number > 13){
//         return (number - 13) * 2
//     } else {
//         return 13 - number
//     }
// }
//
// console.log(getDifference(11))

/* TASK 16 */

// function sumOfNumbers(a, b) {
//     if (a !== b) {
//         return a + b
//     } else {
//         return (a + b) * 3
//     }
// }
//
// console.log(sumOfNumbers(2,2))

/* TASK 17 */

// function absoluteDiff(number) {
//     if (number > 19){
//         return (number - 19) * 3
//     } else {
//         return 19 - number
//     }
// }
//
// console.log(absoluteDiff(20))

/* TASK 18 */

// function checkNumbers(a, b) {
//     if (a=== 50 || b === 50 || (a + b) === 50) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(checkNumbers(30, 20))

/* TASK 19 */
//
// function checkNumber(num) {
//     return num % 20 === 0 || num % 100 === 0 || num % 400 === 0;
// }
// console.log(checkNumber(90))

/* TASK 20 */

function posOrNeg(num) {
    if (num >= 0) {
        return 'positive'
    } else {
        return 'negative'
    }
}

console.log(posOrNeg(10))

