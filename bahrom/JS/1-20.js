/* Task 1 */

// let date = new Date()
// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()
// const prepand = (hours >= 12) ? 'PM' : "AM"
// const week = `Today is: ${weekDays[date.getDay()]}`
// const time = `Current time is: ${hours - 12}:${minutes}:${seconds} ${prepand}`
// console.log(week, time)

/* Task 2 */

// function print_current_page() {
//     window.print();
// }

/* Task 3 */
// let dd = date.getDate()
// let MM = (date.getMonth() + 1)
// let yyyy = date.getFullYear()
// if (dd < 10) {
//     dd = '0' + dd
// }
// if (MM < 10) {
//     MM = '0' + MM
// }
// // date = MM +'-' + dd + '-' + yyyy
// // console.log(date)
// // date = MM +'/' + dd + '/' + yyyy
// // console.log(date)
// const fullDate = 'dd:MM:yyyy'.replace('dd', dd).replace('MM', MM).replace('yyyy', yyyy)
// console.log(fullDate)

/* Task 4 */

// const sideA = 5
// const sideB = 6
// const sideC = 7
// const s = (sideA + sideB + sideC) / 2
// const area = Math.sqrt(s*((s-sideA)*(s-sideB)*(s-sideC)))
// console.log(area)

/* Task 5 */

// function reverse(word) {
//     setInterval(function () {
//         const lastLetter = word[word.length-1]
//         word = lastLetter + word.slice(0, -1)
//         console.log(word)
//     }, 100)
// }
//
// reverse('w3resource')

/* Task 6 */

// function leapyear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

/* Task 7 */

// function years() {
//     const year = []
//     for (let i = 2014; i < 2051; i++) {
//         if (new Date(i, 0, 1).getDay() === 0)
//         year.push(i)
//     }
//     console.log(year)
// }
// years()

/* Task 8 */
const max = 11
let randomNumber = Math.floor(Math.random() * max)
let lives = 3
console.log(randomNumber)

const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    let inputNum = document.getElementById('random').value
    if (lives > 0){
        if (randomNumber > inputNum){
            console.log('Guess higher')
            lives--
        }
        if (randomNumber < inputNum) {
            console.log('Guess Lower')
            lives--
        }
        if (+inputNum === randomNumber) {
            console.log('Great Job')
            btn.disabled = true
        }
    } else {
        console.log('You are out of lives')
    }
})
