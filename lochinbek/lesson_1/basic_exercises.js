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


// exercises 11.

// function C(deg) {
//     const ctem = deg;
//     const F = ctem * 9 / 5 + 32;
//     const m = `${ctem} C is ${F} F.`;
//     console.log(m);
// }
// C(60);
//
// function F(deg) {
//     const ftem = deg;
//     const C = (ftem - 32) * 5 / 9;
//     const m = `${ftem} F is ${C} C.`;
//     console.log(m);
// }
// F(45);


// exercises 12.

// console.log(document.URL);

// exercises 13.


// exercises 14.

// const file = 'photo.img';
// let typeFile = file.split('.').pop();
// console.log(typeFile)


// exercises 15.

// function my_func(n) {
//     if (n <= 13) {
//         return 13 - n;
//     } else {
//         return (n - 13) * 2;
//     }
// }
// console.log(my_func(20));


// exercises 16.

// function compute(a, b) {
//
//     if (a === b) {
//         return (a + b) * 3
//     } else {
//         return a + b
//     }
// }
// console.log(compute(4, 4));


// exercises 17.

// function comp(n) {
//     if (n <= 19) {
//         return (19 - n);
//     } else {
//         return ((n - 19) * 3);
//     }
// }
// console.log(comp(20));
// console.log(comp(3));

// exercises 18.

// function comps1(a, b) {
//     if ((a === 50) || (b === 50) || (a + b === 50)) {
//         return true
//     } else {
//         return false
//     }
// }
//
// function comps2(a, b) {
//     return (a === 50) || (b === 50) || (a + b === 50);
// }
//
// console.log(comps1(123, 12));
// console.log(comps1(123, 50));
// console.log(comps2(23, 25));
// console.log(comps2(50, 4));


// exercises 19.

// function comps3(a) {
//     return ((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20));
// }
// console.log(comps3(10));
// console.log(comps3(90));
// console.log(comps3(99));
// console.log(comps3(199));
// console.log(comps3(200));


// exercises 20.

// function comp4(a, b) {
//     if ((a < 0 && b > 0) || (a > 0 && b < 0))
//     {
//         return true
//     }
// else
//     {
//         return false
//     }
// }
//
// console.log(comp4(200, -3));
// console.log(comp4(200, 3));
// console.log(comp4(200, 3));
// console.log(comp4(-200, 3));


// exercises 21.

// function getWord(word) {
//     let getTwo = word.slice(0, 2);
//     if (getTwo !== "Po") {
//
//         return word.replace(getTwo, "Po")
//     } else {
//         return word
//     }
// }
//
// console.log(getWord('123'))
// console.log(getWord('Poth'))
// console.log(getWord('1000'))
// console.log(getWord('POdsfsd'))
// console.log(getWord('123'))


// function string_check(str1) {
//     if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py')
//     {
//         return str1;
//     }
//     return `Py${str1}`;
// }
//
// console.log(string_check("Python"));
// console.log(string_check("thon"));


// exercises 22.

// function removeL(str, pos){
//     return str.slice(0, pos) + str.slice(pos + 1, str.length)
// }
//
// console.log(removeL("Python",0));
// console.log(removeL("Python",3));
// console.log(removeL("Python",5));


















