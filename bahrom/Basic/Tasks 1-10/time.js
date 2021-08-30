/* TASK 1 */
// const date = new Date()
// const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// console.log('Today is ' + weekDays[date.getDay() - 1])
// console.log('Current time is ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

/* TASK 2 */
// const btn = document.getElementById('btn');
// btn.addEventListener('click', printWindow)
// document.getElementById('btn2').addEventListener('mouseenter', printWindow)
//
// function printWindow() {
//     print()
// }

/* TASK 3 */
let today = new Date()
let dd = today.getDate()
let MM = (today.getMonth() + 1)
const yyyy = today.getFullYear()
if (dd < 10){
    dd = '0' + dd
}
if (MM < 10){
    MM = '0' + MM
}
today = MM + "-" + dd + "-" + yyyy
console.log(today)
today = MM + "/" + dd + "/" + yyyy
console.log(today)
today = dd + "-" + MM + "-" + yyyy
console.log(today)
today = dd + "/" + MM + "/" + yyyy
console.log(today)

const fullDate = 'dd/MM/yyyy'.replace('dd', dd,).replace('MM', MM).replace('yyyy', yyyy);
console.log(fullDate)
//
// /* TASK 4 */
//
// function triangle(a, b, c) {
//     let semiParametr = (a + b + c) / 2
//
//     let Area = Math.sqrt(semiParametr*(semiParametr-a)*(semiParametr-b)*(semiParametr-c))
//     return Area
// }
// console.log(triangle(5,6,7))

/* TASK 5 */

// function texty(word) {
//     setInterval(() => {
//         let lastLetter = word[word.length -1]
//         word = lastLetter+word.slice(0, -1)
//         console.log(word);
//     }, 900)
// }
// texty('w3resource')

/* TASK 6 */
//
// function gregorianYear(year) {
//     if (year % 100 === 0) {
//         if (year % 400 ===0){
//             console.log('This year ' + year + ' is a leap year')
//         } else if ( year % 4===0){
//             console.log('This year ' + year + ' is not a leap year')
//         }
//     } else {
//         console.log('This year ' + year + ' is a leap year')
//     }
// }
// gregorianYear(2016)
// gregorianYear(2000)
// gregorianYear(1700)
// gregorianYear(1800)
// gregorianYear(100)
//
// /* TASK 7 */
//
// function years() {
//     const yillar = []
//     for (let i = 2014; i < 2051; i++) {
//         if (new Date(i,0,1).getDay() === 0){
//             yillar.push(i)
//         }
//     }
//     console.log(yillar)
// }
// years()

/* TASK 8 */

// const btn = document.getElementById('guessBtn')
//
// const max = 10
// let randNum = Math.floor(Math.random() * max)
//
// let lives = 3
//
// btn.addEventListener('click', () => {
//     const guess = document.getElementById('guess').value
//     console.log(randNum)
//     if (lives > 0) {
//         if (guess > randNum) {
//             console.log('Please guess lower')
//             lives--
//         }
//         if (guess < randNum) {
//             console.log('Please guess higher')
//             lives--
//         }
//         if (+guess == randNum) {
//             console.log('Congratulations you WON!!!')
//         }
//     } else {
//         console.log('You are out of lives!')
//     }
// })


/* TASK 9 */

const Christmas = new Date('2021-12-31').getTime()
const daysLeft = Math.ceil(Christmas - new Date().getTime()) / (1000 * 60 * 60 * 24)

console.log('Till new year ' + daysLeft)

/* TASK 10 */

function multiplyBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2
}

function divideBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2
}
