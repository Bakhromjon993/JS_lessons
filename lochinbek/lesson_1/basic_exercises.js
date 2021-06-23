// exercises 1.

// let today = new Date(),
//     hours = today.toLocaleString('en-US', {hour: 'numeric', hour12: true}),
//     minutes = today.getMinutes(),
//     seconds = today.getSeconds(),
//     daylist = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
// daylist.forEach( (day,index) => {
//     const dayNumber = ++index
//     if (dayNumber === today.getDay()){
//        console.log('Today is : ' + day + ' .')
//     }
// })
// console.log( "Current Time : " + hours + " " + minutes + " " + seconds)


// exercises 2.

// let btn = document.querySelector('.printClass');
// btn.addEventListener("click", function(){
//     window.print();
// });


// exercises 3.

// let date = new Date(),
//     yyyy = date.getFullYear(),
//     getMounth = date.getMonth() + 1,
//     mm = (getMounth < 10) ? ('0' + getMounth) : getMounth,
//     dd = date.getDate();
//
// console.log(mm + '-' + dd + '-' + yyyy);
// console.log(mm + '/' + dd + '/' + yyyy);
// console.log(dd + '-' + mm + '-' + yyyy);
// console.log(dd + '/' + mm + '/' + yyyy);


// exercises 4.

// let a = 5,
//     b = 6,
//     c = 7,
//     perimeter = (a + b + c) / 2,
//     area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
// console.log(area);


// exercises 5.


// exercises 6.

// function getYear(year) {
//     if (year % 4 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(getYear(3));
// console.log(getYear(2000));
// console.log(getYear(1700));
// console.log(getYear(1800));
// console.log(getYear(100));


// exercises 7.

// for (let x = 2014; x <= 2050; x++) {
//     let day = new Date(x, 0, 1);
//     if (day.getDay() === 0){
//         console.log(x);
//     }
// }


// exercises 8.

// const number = Math.floor(Math.random() * 10);
// const enterNumber = prompt('Guess the number between 1 and 10 inclusive')
// if (enterNumber == number){
//     console.log('Matched');
// }else {
//     console.log('Not matched, the number was '+enterNumber);
// }


// exercises 9.

// let today = new Date().getTime(),
//     crday = new Date(new Date().getFullYear(), 11, 25).getTime(),
//     calc = crday - today
// console.log(Math.ceil(calc/(1000*60*60*24)));


// exercises 10.

// let num1 = document.querySelector('.firstInput'),
//     num2 = document.querySelector('.secondInput'),
//     multiplyBtn = document.querySelector('.multiply'),
//     divideBtn = document.querySelector('.divide'),
//     result = 0;
// multiplyBtn.addEventListener('click', function (){
//     result = parseInt(num1.value) * parseInt(num2.value)
//     console.log(result);
// })
// divideBtn.addEventListener('click', function (){
//     result = parseInt(num1.value) / parseInt(num2.value)
//     console.log(result);
// })






























