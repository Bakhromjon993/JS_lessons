/* TASK 1 */
const date = new Date()
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log('Today is ' + weekDays[date.getDay() - 1])
console.log('Current time is ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

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
// today = MM + "-" + dd + "-" + yyyy
// console.log(today)
// today = MM + "/" + dd + "/" + yyyy
// console.log(today)
// today = dd + "-" + MM + "-" + yyyy
// console.log(today)
// today = dd + "/" + MM + "/" + yyyy
// console.log(today)

var fullDate = 'dd/MM/yyyy'.replace('dd', dd,).replace('MM', MM).replace('yyyy', yyyy)
console.log(fullDate)

/* TASK 4 */

function triangle(a, b, c) {
    let semiParametr = (a + b + c) / 2

    let Area = Math.sqrt(semiParametr*(semiParametr-a)*(semiParametr-b)*(semiParametr-c))
    return Area
}
console.log(triangle(5,6,7))

/* TASK 5 */

function texty(word) {
    setInterval(() => {
        let lastLetter = word[word.length -1]
        word = lastLetter+word.slice(0, -1)
        console.log(word);
    }, 900)

}
// function interval(word) {
//     setInterval(texty(word),2000)
// }
texty('w3resource')
