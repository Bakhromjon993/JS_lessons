// exercise 1.

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


// exercise 2.

// let btn = document.querySelector('.printClass');
// btn.addEventListener("click", function(){
//     window.print();
// });


// exercise 3.

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


// exercise 4.

// let a = 5,
//     b = 6,
//     c = 7,
//     perimeter = (a + b + c) / 2,
//     area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
// console.log(area);


// exercise 5.
// const rotate = (str) => {
//     setInterval(() => {
//         let lastLetter = str.slice(-1);
//         let restOfString = str.slice(0, -1);
//         str = lastLetter + restOfString;
//         console.log(str);
//     }, 900);
// }

// rotate("w3resource");

// exercise 6.

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


// exercise 7.

// for (let x = 2014; x <= 2050; x++) {
//     let day = new Date(x, 0, 1);
//     if (day.getDay() === 0){
//         console.log(x);
//     }
// }


// exercise 8.

// const number = Math.floor(Math.random() * 10);
// const enterNumber = prompt('Guess the number between 1 and 10 inclusive')
// if (enterNumber == number){
//     console.log('Matched');
// }else {
//     console.log('Not matched, the number was '+enterNumber);
// }


// exercise 9.

// let today = new Date().getTime(),
//     crday = new Date(new Date().getFullYear(), 11, 25).getTime(),
//     calc = crday - today
// console.log(Math.ceil(calc/(1000*60*60*24)));


// exercise 10.

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


// exercise 11.

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


// exercise 12.

// console.log(document.URL);

// exercise 13.
// var varName = "anotherName";
// var n = 20;
// this[varName] = n;
// console.log(this[varName]);

// exercise 14.

// const file = 'photo.img';
// let typeFile = file.split('.').pop();
// console.log(typeFile)


// exercise 15.

// function my_func(n) {
//     if (n <= 13) {
//         return 13 - n;
//     } else {
//         return (n - 13) * 2;
//     }
// }
// console.log(my_func(20));


// exercise 16.

// function compute(a, b) {
//
//     if (a === b) {
//         return (a + b) * 3
//     } else {
//         return a + b
//     }
// }
// console.log(compute(4, 4));


// exercise 17.

// function comp(n) {
//     if (n <= 19) {
//         return (19 - n);
//     } else {
//         return ((n - 19) * 3);
//     }
// }
// console.log(comp(20));
// console.log(comp(3));

// exercise 18.

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


// exercise 19.

// function comps3(a) {
//     return ((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20));
// }
// console.log(comps3(10));
// console.log(comps3(90));
// console.log(comps3(99));
// console.log(comps3(199));
// console.log(comps3(200));


// exercise 20.

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


// exercise 21.

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


// exercise 22.

// function removeL(str, pos){
//     return str.slice(0, pos) + str.slice(pos + 1, str.length)
// }
//
// console.log(removeL("Python",0));
// console.log(removeL("Python",3));
// console.log(removeL("Python",5));


// exercise 23.

// const changeWord = (word) => {
//     return word.split('').reverse().join('')
// }
//
// console.log(changeWord('12345'));


// exercise 24.

// const changeWord2 = (word) => {
//     let first = word.substr(0,1);
//     return first + word + first
// }
//
// console.log(changeWord2('12345'));
// console.log(changeWord2('a'));
// console.log(changeWord2('ab'));
// console.log(changeWord2('abc'));


// exercise 25.

// const givenNumbers = (a) => {
//     if ((a % 3 === 0) || (a % 7 === 0)) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(givenNumbers(7))
// console.log(givenNumbers(1217))
// console.log(givenNumbers(3))
// console.log(givenNumbers(72))


// exercise 26.
// function changeWord3(str) {
//     if (str.length >= 3) {
//         const x = str.substr(str.length - 3, str.length)
//         return x + str + x
//     } else
//         return false
// }
// console.log(changeWord3("abc"));
// console.log(changeWord3("ab"));
// console.log(changeWord3("abcd"));
// console.log(changeWord3("rewdf"));


// exercise 27.

// const findWord = (word) => {
//     if (word.length < 4) {
//         return false
//     }
//     const fourWord = word.substring(0, 4);
//     if (fourWord === 'java') {
//         return true
//     } else
//         return false
// }
//
// console.log(findWord('javafdsfass'));


// exercise 28.

// const compareNums = (a, b) => {
//     if ((a > 50 && a <= 99) || (b >= 10 && b <= 99)) {
//         return true
//     }
//     else {
//         return false
//     }
// }
//
// console.log(compareNums(11, 770));
// console.log(compareNums(62, 80));
// console.log(compareNums(14, 99));


// exercise 29.

// const compareNums2 = (a, b, c) => {
//     if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(compareNums2(50, 90, 99));
// console.log(compareNums2(5, 9, 199));
// console.log(compareNums2(65, 89, 199));
// console.log(compareNums2(65, 9, 199));


// exercise 30.

// const findWord3 = (word) => {
//     if (word.length < 6) {
//         return false
//     }
//     const fourWord = word.substring(word.length, word.length - 6);
//     if (fourWord === 'Script' && word.length === 10) {
//         return word.substring(0, 4)
//     } else
//         return word
// }
//
// console.log(findWord3('JavaScript'));
// console.log(findWord3('CoffeeScript'));


// exercise 31.

// const compareNums3 = (a, b, c) => {
//     max = 0;
//     if (a > b) {
//         return max = a;
//     } else {
//         return max = b;
//     }
//     if (c > max) {
//         return max = c
//     }
// }
// console.log(compareNums3(1, 0, 1));
// console.log(compareNums3(0, -10, -20));
// console.log(compareNums3(1000, 510, 440));


// exercise 32.

// const compareNums4 = (a, b) => {
//     if (a !== b) {
//         x = Math.abs(a - 100);
//         y = Math.abs(b - 100);
//         if (x > y) {
//             return b
//         }
//         if (y > x) {
//             return a
//         }
//         return false
//     }else {
//         return false
//     }
// }
// console.log(compareNums4(1, 1));
// console.log(compareNums4(0, -20));
// console.log(compareNums4(1000, 440));


// exercise 33.

// function com1(x, y) {
//     if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)
//         ||
//         (x >= 70 && x <= 100 && y >= 70 && y <= 100)
//     ) {
//         return true
//     } else {
//         return false
//     }
//
// }
//
// console.log(com1(45, 60));
// console.log(com1(25, 60));
// console.log(com1(45, 80));
// console.log(com1(44, 56));
// console.log(com1(70, 95));
// console.log(com1(50, 89));

// exercise 34.

// function max_num(x, y) {
//     if ((x >= 40) && (x <= 60) && (y >= 40) && (y <= 60)) {
//         if (x === y) {
//             return "Numbers are the same";
//         } else if (x > y) {
//             return x;
//         } else {
//             return y;
//         }
//     } else {
//         return "Numbers don't fit in range";
//     }
// }
//
// console.log(max_num(45, 60));
// console.log(max_num(25, 60));
// console.log(max_num(45, 80));


// exercise 35.

// const checkWord = (word, a) => {
//     secondchar = word.substring(1, 2)
//     if (secondchar === a) {
//         return true
//     }else {}
//     return false
// }
// console.log(checkWord("Python", "y"));
// console.log(checkWord("JavaScript", "a"));
// console.log(checkWord("Console", "o"));
// console.log(checkWord("Console", "C"));
// console.log(checkWord("Console", "e"));
// console.log(checkWord("JavaScript", "S"));


// exercise 36. not ready

// const compareNums3 = (a, b, c) => {
//     if (a > 0 && b > 0 && c > 0) {
//         let x = parseInt(a.toString().charAt(a.toString().length - 1)),
//             y = parseInt(b.toString().charAt(b.toString().length - 1)),
//             z = parseInt(c.toString().charAt(c.toString().length - 1));
//         if (x === y && x === z && y === z) {
//             return x + ' ' + y + ' ' + z;
//         }
//     } else {
//         return false
//     }
//
// }
// console.log(compareNums3(12345, 12345, 13339));
// console.log(compareNums3(-23, 10, 20));
// console.log(compareNums3(100022, 510, 440));


// exercise 37. not done


// exercise 38. need explain

// function exam(totmarks, last_exam) {
//     if (last_exam) {
//         return totmarks >= 90;
//     } else {
//         return (totmarks >= 89 && totmarks <= 100);
//     }
// }
//
// console.log(exam("78", ""));
// console.log(exam("88", "true"));
// console.log(exam("96", "true"));


// exercise 39.

// function ball(x, y) {
//     const collect = x + y;
//     if (collect >= 50 && collect <= 80) {
//         return 65;
//     }
//     else {
//         return 80;
//     }
// }
//
// console.log(ball(40, 30));
// console.log(ball(60, 90));


// exercise 40.

// const compnum3 = (a, b) => {
//     if (a === 8 || b === 8) {
//         return true
//     }
//     if (a + b === 8 || Math.abs(a - b) === 8) {
//         return true
//     }
//         return false
// }
// console.log(compnum3(7, 8));
// console.log(compnum3(16, 8));
// console.log(compnum3(24, 32));
// console.log(compnum3(17, 18));




