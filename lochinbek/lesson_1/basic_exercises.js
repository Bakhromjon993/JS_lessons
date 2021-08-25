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


// exercise 41.

// const treeNums = (a, b, c) => {
//     if (a === b && b === c) {
//         return 30;
//     }
//     if (a === b || b === c || c === a) {
//         return 40;
//     } else {
//         return 20;
//     }
// }
//
// console.log(treeNums(8, 8, 8));
// console.log(treeNums(8, 8, 18));
// console.log(treeNums(8, 7, 18));


// exercise 42.

// function numss(a, b, c) {
//     if (b > a && c > b) {
//         return "strict mode";
//     } else if (c > b)
//         return "Soft mode";
//     else
//         return "Undefinded";
// }
//
// console.log(numss(10, 15, 31));
// console.log(numss(24, 22, 31));
// console.log(numss(50, 21, 15));


// exercise 43.

// function lastD(a, b, c) {
//     return (a % 10 === b % 10) ||
//            (b % 10 === c % 10) ||
//            (c % 10 === a % 10);
//
// }
//
// console.log(lastD(22, 32, 42));
// console.log(lastD(102, 302, 2));
// console.log(lastD(20, 22, 45));


// exercise 44.

// function lastwD(a, b, c) {
//     return (a > 20 && (a < b || a < c)) ||
//            (b > 20 && (b < a || b < c)) ||
//            (c > 20 && (c < b || c < a))
//
// }
//
// console.log(lastwD(23, 45, 10));
// console.log(lastwD(23, 23, 10));
// console.log(lastwD(21, 66, 75));


// exercise 45.

// const twoNumsDif = (a, b) => {
//     if ( (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(twoNumsDif(15, 9));
// console.log(twoNumsDif(25, 15));
// console.log(twoNumsDif(7, 8));
// console.log(twoNumsDif(25, 10));
// console.log(twoNumsDif(5, 9));
// console.log(twoNumsDif(7, 9));
// console.log(twoNumsDif(9, 25));


// exercise 46 need explain.

// const sevenNums = (a, b) => {
//     if (!((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0))) {
//         return ((a % 7 === 0 || a % 11 === 0) || (b % 7 === 0 || b % 11 === 0));
//     } else {
//         return false
//     }
// }
// console.log(sevenNums(14, 21));
// console.log(sevenNums(14, 20));
// console.log(sevenNums(16, 20));


// // exercise 47.
//
// function gift(a, b, n)
// {
//     if (n < 40 || n > 10000)
//         return false;
//     else
//     if (n >= a && n <= b)
//         return true;
//     else
//         return false;
// }
// console.log(gift(40, 4000, 45));
// console.log(gift(80, 320, 79));
// console.log(gift(89, 4000, 30));


// exercise 48.

// function reverseString(str) {
//     return str.split("").reverse().join('');
// }
// console.log(reverseString("salom"));


// exercise 49 not done.

// exercise 50  need explain.

// const capWord = (word) => {
//     let wortToArray = word.split(''),
//         otherL = wortToArray.splice(1, wortToArray.length).join(''),
//         firstL = wortToArray[0].toUpperCase();
//     return firstL + otherL
// }
//
// console.log(capWord("salom"));

// const Cublat = (words) => {
//     words = words.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     return words.join(' ')
// }
//
// console.log(Cublat("Write a JavaScript program to capitalize the first letter of each word of a given string."));


// exercise 51.

// const changeToMin = (t) => {
//     let hours = Math.floor(t / 60),
//         minuts = t % 60
//     return hours + ' : ' + minuts;
// }
// console.log(changeToMin(71));
// console.log(changeToMin(450));
// console.log(changeToMin(1441));


// exercise 52.

// const alfWord = (word) => {
//      word = word.split('').sort().join('')
//     return word
// }
//
// console.log(alfWord('salom'));


// exercise 53.

// const testAb = (words) => {
//     return (/a...b/).test(words) || (/b...a/).test(words);
// }
// console.log(testAb('qweqwa qwbe aqwbe bwqbeq '));
// console.log(testAb('b sa'));


// exercise 54.

// function vowels(str) {
//
//     return str.replace(/[^aeiou]/g, "").length
// }
//
// console.log(vowels("wrwerwer sdfsiovb"));
// console.log(vowels("ghfghertertasa oipoiptu"));


// exercise 55.
//
// function pt(str) {
//     return str.replace(/[^p]/g, "").length === str.replace(/[^t]/g, "").length
// }
//
// console.log(pt("ppwer ttwer"));
// console.log(pt("ppwep ttweret"));
// console.log(pt("paatpss"));
// console.log(pt("paatps"));


// exercise 56 not done.


// exercise 57.

// const wordsCount = (word, times) => {
//     if (times < 0) {
//         return false
//     } else {
//         return word.repeat(times)
//     }
// }
//
// console.log(wordsCount("abc", 5));
// console.log(wordsCount("abc", 0));
// console.log(wordsCount("abc", -2));


// exercise 58.

// const wordst = (word) => {
//     if (word <= 3) {
//         return false
//     } else {
//         let wLength = word.length;
//         let wReturn = word.substr(wLength - 3, wLength);
//         return  wReturn + wReturn + wReturn + wReturn
//     }
// }
//
// console.log(wordst("abc123 qqq" ));
// console.log(wordst("abcs da123 908asd"));
// console.log(wordst("abc123 dfg"));


// exercise 59.

// const breakWord = (a) => {
//     if (a % 2 === 0) {
//         return a.substr(0, a.length / 2);
//     }
//     else {
//         return a
//     }
// }
// console.log(breakWord('1234567890'));
// console.log(breakWord('wqweq'));


// exercise 60.

// const word2 = (a) => {
//     let a2 = a.substring(1, a.length - 1)
//     return a2;
// }
// console.log(word2('1234567890'));
// console.log(word2('wqweq'));


// exercise 61.

// const joinWords = (a, b) =>{
//     let a2 = a.slice(1),
//         b2 = b.slice(1);
//     return a2 + b2
// }
//
// console.log(joinWords('ad', 'bf'));
// console.log(joinWords("PHP","JS"));
// console.log(joinWords("A","B"));
// console.log(joinWords("AA","BB"));


// exercise 62.

// const x = (a) => {
//     if (a.length > 0){
//         let a2 = a.slice(-3),
//             a3 = a.slice(0, -3)
//         return a2 + a3;
//     }
//     return a;
// }
// console.log(x('abcdefgh'));
// console.log(x("Python"));
// console.log(x("JavaScript"));
// console.log(x("Hi"));


// exercise 63.

// const middleW = (a) => {
//     if (a.length % 2 !== 0) {
//        let aStart = (a.length  - 3) / 2;
//        return a.substr( aStart, 3)
//     }
//     return a;
// }
// console.log(middleW('abcdefg'));
// console.log(middleW('HTML5'));
// console.log(middleW('Python'));
// console.log(middleW('PHP'));
// console.log(middleW('Exercises'));


// exercise 64.

// const concatW = (a, b) => {
//     let aLeng = a.length,
//         bLeng = b.length;
//     if (aLeng > bLeng) {
//         let com = aLeng - bLeng;
//         return a.slice(com).concat(b);
//     }
//     if (aLeng < bLeng) {
//         let com2 = bLeng - aLeng;
//         return a.concat(b.slice(com2));
//     }
//     return a.concat(b);
// }
//
// console.log(concatW("Python", "JS"));
// console.log(concatW("ab", "cdef"));
// console.log(concatW("abewrdsfrr", "cdsdfdsef"));
// console.log(concatW("abrsssr", "cdvvvcef"));
// console.log(concatW("abrssssr", "cdef"));


// function str_con_cat(str1, str2) {
//     const m = Math.min(str1.length, str2.length);
//
//     return str1.substring(str1.length - m) + str2.substring(str2.length - m);
// }
//
// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));


// exercise 65.

// const wodsSl = (a) =>{
//     if (a.slice(-6) === 'Script'){
//         return true
//     }
//     return false
// }
// console.log(wodsSl("JavaScript"));
// console.log(wodsSl("Java Script"));
// console.log(wodsSl("Java Scripts"));


// exercise 66.

// const wodsSl2 = (a) => {
//     if (a.length > 3 && (a.slice(0, 3) === 'Los' || a.slice(0, 3) === 'New')) {
//         return a
//     } else {
//         return false
//     }
// }
// console.log(wodsSl2("New York"));
// console.log(wodsSl2("Los Angeles"));
// console.log(wodsSl2("London"));


// exercise 67.

// function nop(str) {
//     let start_pos = 0;
//     let end_pos = str.length;
//
//     if (str.length > 0 && str.charAt(0) === 'P')
//     {
//         start_pos = 1;
//     }
//
//     if (str.length > 1 && str.charAt(str.length - 1) === 'P')
//     {
//         end_pos--;
//     }
//
//     return str.substring(start_pos, end_pos);
// }
//
// console.log(nop("PythonP"));
// console.log(nop("Python"));
// console.log(nop("JavaScript"));


// exercise 68.

// const wordCh = (word, num) => {
//     let wlen = word.length,
//         start = word.substring(0, num),
//         end = word.substring(wlen - num);
//     return start + end;
// }
//
// console.log(wordCh("JavaScript", 2));
// console.log(wordCh("JavaScript", 3));


// exercise 69.

// first
// const arr = (a) => {
//     const sum = a.reduce((sum, number) => {
//         const updatedSum = sum + number;
//         return updatedSum;
//     }, 0);
//     return sum
// }
//
// console.log(arr([10, 32, 20]));
// console.log(arr([5, 7, 9]));
// console.log(arr([0, 8, -11]));

// second
// const arr = (a) => {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//          sum+= a[i];
//     }
//     return sum
// }
// console.log(arr([10, 32, 20]));
// console.log(arr([5, 7, 9]));
// console.log(arr([0, 8, -11]));


// exercise 70.

// function rotate_elements_left(array)
// {
//     return [array[1], array[2], array[0]];
// }
// console.log(rotate_elements_left([3, 4, 5]));
// console.log(rotate_elements_left([0, -1, 2]));
// console.log(rotate_elements_left([7, 6, 5]));


// exercise 71.

// const one = (num) => {
//     if (num[0] === 1 || num[num.length - 1] === 1) {
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(one([1, 3, 5]));
// console.log(one([3, 5, 1]));
// console.log(one([2, 4, 6]));


// exercise 72.

// const enums = (arr) => {
//     return arr[0] === arr[arr.length - 1]
// }
//
// console.log(enums([10, 20, 30]));
// console.log(enums([10, 20, 30, 10]));
// console.log(enums([20, 20, 20]));


// exercise 73.

// const rearr = (arr) =>{
//    return arr.reverse();
// }
//
// console.log(rearr([5, 4, 3]));
// console.log(rearr([1, 0, -1]));
// console.log(rearr([2, 3, 1]));


// const reArr = (arr) => {
//     return arr.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }
// console.log(reArr([5, 4, 3]));
// console.log(reArr([1, 0, -1]));
// console.log(reArr([2, 3, 1]));


// exercise 74.

// const setArr = (arr) => {
//     let maxValue = Math.max(arr[0], arr[arr.length - 1]);
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//       arr[i] = maxValue
//     }
//     return arr
// }
// console.log(setArr([20, 30, 40]));
// console.log(setArr([-7, -9, 0]));
// console.log(setArr([12, 10, 3]));


// exercise 75.

// const makeArr = (arr1, arr2) => {
//     let newArr = [arr1[1], arr2[1]]
//     return newArr
// }
//
// console.log(makeArr([1, 2, 3], [1, 5, 6]));
// console.log(makeArr([3, 3, 3], [2, 8, 0]));
// console.log(makeArr([4, 2, 7], [2, 4, 5]));


// exercise 76.

// const makeArr = (arr) => {
//     return [arr[0], arr[arr.length - 1]]
// }
//
// console.log(makeArr([20, 20, 30]));
// console.log(makeArr([5, 2, 7, 8]));
// console.log(makeArr([17, 12, 34, 78]));


// exercise 77 not ready.

// const findNum = (arr) => {
//     if (arr.indexOf(1) >= 0 || arr.indexOf(3) >= 0) {
//         return true
//     }
//     return false
// }
// console.log(findNum([1, 5]));
// console.log(findNum([2, 3]));
// console.log(findNum([7, 5]));


// exercise 78.

// const findNum = (arr) => {
//     if (arr.indexOf(1) < 0 && arr.indexOf(3) < 0) {
//         return true
//     }else {
//       return false
//     }
// }
// console.log(findNum([7, 8]));
// console.log(findNum([3, 2]));
// console.log(findNum([0, 1]));


// exercise 79.

// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }
//
// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));


// exercise 80.

//my solution
// const changeArr = (arr) => {
//     if (arr.length> 1){
//         let firstA = arr[0],
//             lastA = arr[arr.length - 1],
//             newArr = arr.slice(1, arr.length - 1);
//         newArr.push(firstA);
//         newArr.unshift(lastA);
//         return  newArr
//     }
//     return  arr
// }
//
// console.log(changeArr([1, 2, 3, 4]));
// console.log(changeArr([0, 5]));
// console.log(changeArr([3]));

// second
// function swap(arra) {
//     [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
//     return arra;
// }
// console.log(swap([1, 2, 3, 4]));
// console.log(swap([0, 2, 1]));
// console.log(swap([3]));


// exercise 81.

// const addNum = (num) => {
//     let arrNum = num.toString().split(''),
//         colcNum = 0;
//     arrNum.forEach(i => {
//         colcNum += parseInt(i)
//     })
//     return colcNum
// }
// console.log(addNum(11111));
// console.log(addNum(25));
// console.log(addNum(50));


// exercise 82.

// const morTen = (a) => {
//     if (a >= 10) {
//         let pt = a % 10;
//         return pt
//     }
// }
// const addNms = (a, b) => {
//     let a2 = a.toString().split(''),
//         b2 = b.toString().split(''),
//         firs = +a2[0] + (+b2[0]),
//         sec = +a2[1] + (+b2[1]),
//         thr = +a2[2] + (+b2[2]);
//     if(firs > 10) {
//         firs = morTen(firs);
//     }
//     if(firs > 10) {
//         firs = morTen(sec);
//     }
//     if(firs > 10) {
//         firs = morTen(thr);
//     }
//     return firs + "" + sec + "" + thr
// }
//
// console.log(addNms(222, 911))
// console.log(addNms(200, 900))

// exercise 83.

// const longArr = (arr) => {
//     let arrse = [];
//     arr.map(i => {
//         arrse.push(i.length)
//     })
//     return Math.max(...arrse)
// }
// console.log(longArr(['artrwetertwrett', 'aa', 'aaa', 'aaaaa', 'aaaa']))


// exercise 84 not ready.
// function letters(string) {
//     let word = ''
//     for(let i = 0; i < string.length; i++){
//         word += String.fromCharCode(string.charCodeAt(i) + 1)
//     }
//     return word
// }
// console.log(letters('abcdxyz'))

// exercise 85.

// my solution
// const findArra = (arr) => {
//     let toq = 0,
//         juft = 0,
//         twoArr = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         toq += arr[i];
//     }
//     for (let j = 1; j < arr.length; j += 2) {
//         juft += arr[j];
//     }
//     twoArr.push(toq, juft)
//     return twoArr
// }
// console.log(findArra([1, 3, 6, 2, 5, 10]))


// second solution
// function alternate_Sums(arr) {
//     var result = [0, 0];
//     for(var i = 0; i < arr.length; i++)
//     {
//         if(i % 2) result[1] += arr[i];
//         else
//             result[0] += arr[i];
//     }
//     return result
// }
//
// console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))


// exercise 86.

// const findAngle = (num) => {
//     if (num < 90) {
//         return 'Acute angle'
//     }
//     if (num === 90) {
//         return 'Right angle'
//     }
//     if (num < 180) {
//         return 'Obtuse angle'
//     }
//     if (num === 180) {
//         return 'Straight angle'
//     }
//     return "Straight angle.";
// }
//
// console.log(findAngle(47))
// console.log(findAngle(90))
// console.log(findAngle(145))
// console.log(findAngle(180))


// exercise 87 not done.


// exercise 88.

// const numsT = (a, b, divisor) => {
//     if (a % divisor === 0 && b % divisor === 0 || b % divisor !== 0 && b % divisor !== 0) {
//         return true
//     }
//     return false
// }
//
// console.log(numsT(10, 25, 5))
// console.log(numsT(10, 20, 5))
// console.log(numsT(10, 20, 3))
// console.log(numsT(10, 20, 4))


// exercise 89.
//
// function checkenthing(x, y, z) {
//     return x + y === z || x * y === z || x / y === z || x - y === z;
// }
//
// console.log(checkenthing(10, 25, 35))
// console.log(checkenthing(10, 25, 250))
// console.log(checkenthing(30, 25, 5))
// console.log(checkenthing(100, 25, 4.0))
// console.log(checkenthing(100, 25, 25))


// exercise 90 not done.


// exercise 91 not done.


// exercise 92.
//
// function checkenthing2(arr) {
//     var max = -1;
//     var temp;
//     for (let i = 0; i < arr.length - 1; i++)
//     {
//         temp = Math.abs(arr[i] - arr[i + 1]);
//         max = Math.max(max, temp);
//     }
//     return max;
// }
//
// console.log(checkenthing2([1, 2, 3, 8, 9]))
// console.log(checkenthing2([1, 2, 3, 18, 9]))
// console.log(checkenthing2([13, 2, 3, 8, 9]))


// exercise 93.

// my solution

// const finMAxMin = (arr) => {
//     let maxValue = Math.max(...arr);
//     let minValue = Math.min(...arr);
//     return maxValue - minValue
// }
// console.log(finMAxMin([1, 2, 3, 8, 9]))
// console.log(finMAxMin([1, 2, 3, 18, 9]))
// console.log(finMAxMin([13, 2, 3, 8, 9]))

//second solution.

// const findFor = (arr) => {
//     let maxVal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = 0; k < arr.length; k++) {
//             let dif = Math.abs(arr[i] - arr[k]);
//             maxVal = Math.max(maxVal, dif)
//         }
//     }
//     return maxVal
// }
//
// console.log(findFor([1, 2, 3, 8, 9]))
// console.log(findFor([1, 2, 3, 18, 9]))
// console.log(findFor([13, 2, 3, 8, 9]))


// exercise 94 not done.

// const mostAr = (arr) => {
//     let index = {};
//     let max_num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (index[arr[i]]){
//             index[arr[i]]++;
//             max_num = arr[i]
//         } else {
//             index[arr[i]] = 1
//         }
//     }
//     return max_num
// }
// console.log(mostAr([3, 3, 4, 3, 5, 3, 1, 5, 5, 5, 5, 5, 8, 1, 2, 2, 9]));


// exercise 95.

// my solution

// const changeArr = (arr, first, second) => {
//     let colArr = []
//     arr.findIndex((value, i) => {
//         if (value === first) {
//             value = second
//             colArr.push(value)
//         } else {
//             colArr.push(value)
//         }
//     })
//     return colArr
// }
// console.log(changeArr([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));

//second solution

// const findA = (arr, oldN, newN) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === oldN) {
//             arr[i] = newN
//         }
//     }
//     return arr;
// }
// console.log(findA([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));

// exercise 96.

// const colc = (arr) => {
//     let colca = 0;
//     for (let i = 1; i < arr.length; i++) {
//         colca += Math.abs(arr[i] - arr[i - 1]);
//     }
//     return colca
// }
// console.log(colc([1, 2, 3, 2, 123, -5]));


// exercise 97 not done.

// exercise 98.

// function change_case(new_str) {
//     var x = 0;
//     var y = 0;
//
//     for (var i = 0; i < new_str.length; i++) {
//         if (/[A-Z]/.test(new_str[i])) {
//             x++;
//         } else y++;
//     }
//
//     if (y > x) return new_str.toLowerCase();
//     return new_str.toUpperCase();
// }
//
// console.log(change_case("Write"))
// console.log(change_case("PHp"))
// console.log(change_case("sdfsdf"))
// console.log(change_case("AFDSF"))

// exercise 99.
//
// const chartP = (str1, str2) => {
//     const first = str1.split(''),
//         secons = str2.split('');
//         let rusult = true,
//         maxLen = Math.max(first.length, secons.length);
//     first.sort();
//     secons.sort();
//
//     for (let i = 0; i < maxLen; i++) {
//         if(first[i] !== secons[i]){
//             rusult  = false;
//         }
//     }
//     return rusult;
// }
//
//
// console.log(chartP("xyz", "zyx"))
// console.log(chartP("xyz", "zyp"))


// exercise 100.

// const maschek = (arr1, arr2) => {
//     let result = false;
//     const maxLen = Math.max(arr1.length, arr2.length);
//     for (let i = 0; i < maxLen; i++) {
//         if (arr1.indexOf(arr2[i]) >= 0){
//             result = true
//         }
//     }
//     return result
// }
// console.log(maschek([1, 2, 3], [3, 4, 5]))
// console.log(maschek([1, 2, 3], [5, 6, 7]))


// exercise 101 not done.


// exercise 102.

// const numbers = arr => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 result++
//             }
//         }
//     }
//     return result
// }
//
// console.log(numbers([0, 3, 2, 5, 9]));
// console.log(numbers([1, 5, 4, 3]));
// console.log(numbers([10, 30, 20, -10]));


// exercise 103 not done.


// exercise 104.

// const difr = (arr, n) => {
//     let maxVal = -1;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let a = Math.abs(arr[i] - arr[j]);
//             if (a <= n) {
//                 maxVal = Math.max(maxVal, a)
//             }
//         }
//     }
//     return maxVal
// }
//
// console.log(difr([12, 10, 33, 34], 10));
// console.log(difr([12, 10, 33, 34], 24));
// console.log(difr([12, 10, 33, 44], 40));


// exercise 105 not done.


// exercise 106.

// const minD = (num, d) => {
//     if (num % d !== 0) {
//         return num;
//     }
//     if (d=== 1) {
//         return num;
//     }
//     while (num % d === 0) {
//         num = num / d
//     }
//     return num
// }
// console.log(minD(-12, 2))
// console.log(minD(14, 2))
// console.log(minD(13, 1))


// exercise 107.

// const findAll = arr => {
//     let temp = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
//                temp++
//             }
//         }
//     }
//     return temp
// }
//
// console.log(findAll([1, 2, 3]))
// console.log(findAll([2, 4, 6]))
// console.log(findAll([32, 4, 8]))


// exercise 108.

// function dot_product(vector1, vector2) {
//     var result = 0;
//     for (var i = 0; i < 3; i++) {
//         result += vector1[i] * vector2[i];
//     }
//     return result;
// }
// console.log(dot_product([1,2,3], [1,2,3]))
// console.log(dot_product([2,4,6], [2,4,6]))
// console.log(dot_product([1,1,1], [0,1,-1]))


// exercise 109.

// const getNum = num => {
//     let arr = [];
//     for (let i = 2; i <= num; i++) {
//         let num = true;
//         for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
//             if (i % j === 0) {
//                 num = false;
//                 break;
//             }
//         }
//         if(num) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
//
// console.log(getNum(5))
// console.log(getNum(11))
// console.log(getNum(20))


// exercise 110.

// const findNum = (arr, num) => {
//     let temp = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 && arr[i] !== num) {
//             temp++
//         }
//         if (arr[i]===num) {
//             return temp
//         }
//     }
//     return -1
// }
// console.log(findNum([1,2,3,4,5,6,7,8], 5))
// console.log(findNum([1,3, 2, 5,6,7,8], 6))
// console.log(findNum([1,3, 2, 5,6,7,8], 8))
// console.log(findNum([1,3, 2, 5,6,7,8], 10))


// exercise 111.

// const funt = (x, y, z) => {
//     if ((x !== y) && (x !== z) && (y !== z)) {
//         return 'unequal';
//     }
//     if (x === y) return z;
//     if (x === z) return y;
//     return x;
// }
// console.log(funt(1, 2, 2))
// console.log(funt(1, 1, 2))
// console.log(funt(1, 2, 3))


// exercise 112.

// const factorial = number => {
//     let makeNum = [];
//     let collect = null;
//     let temp = 0;
//     for (let i = 0; i <= number; i++) {
//         makeNum.push(i);
//         makeNum[0] = 1;
//     }
//    collect = makeNum.reduce((a, b)=> a*b, 1)
//     while (collect % 5 === 0) {
//         collect /= 5;
//         temp++;
//     }
//     return collect + ' ' + temp
// }
//
// console.log(factorial(8))
// console.log(factorial(9))
// console.log(factorial(10))


// exercise 113 not ready.

// function int_sum(num) {
//     var s_sum = 0;
//     while (num > 0) {
//         console.log(num);
//         s_sum += num;
//         num = Math.floor(num / 2);
//     }
//     // return s_sum;
// }
// console.log(int_sum(8))
// console.log(int_sum(9))
// console.log(int_sum(26))

// const nums = number => {
//     let topNum = [];
//     let botNum = null;
//     let numArr = []
//     for (let i = 0; i < number; i++) {
//         numArr.push(i)
//     }
//     for (let j = 0; j < numArr.length; j++) {
//         topNum.push(numArr[j]/numArr[j]*Math.sqrt(numArr[j]))
//     }
//     return topNum
// }
//
//
// console.log(nums(8))
// console.log(nums(9))
// console.log(nums(26))


// exercise 114.

// const findSent = sent => {
//    let firstLet = sent[0],
//        lastLet = sent[sent.length - 1];
//    return /[A-Z]/.test(firstLet) && lastLet === '.'
// }
//
// console.log(findSent("This tool will help you write better English and efficiently corrects texts."));
// console.log(findSent("This tool will help you write better English and efficiently corrects texts"));
// console.log(findSent("this tool will help you write better English and efficiently corrects texts."));


// exercise 115 not done.


// exercise 116 not done.


// exercise 117 not done.


// exercise 118 not done.


// exercise 119.

// const nbs = (x, y, z) => {
//     return y >= x && y <= z;
// }
//
// console.log(nbs(1, 2, 3));
// console.log(nbs(1, 2, -3));
// console.log(nbs(1.1, 1.2, 1.3));


// exercise 120.

// const  check = (a, b, x, y, r) => {
//     var t = (a - x) * (a - x) + (b - y) * (b - y);
//     r *=r;
//     if (t < r) {
//         return true;
//     }
//     return false;
// }
//
// console.log(check(0, 0, 2, 4, 6));
// console.log(check(0, 0, 6, 8, 6));


// exercise 121 not done.


// exercise 122.

// const incriseArr = arr => {
//     let num = true;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] >= arr[j]) {
//                 num = false;
//                 break;
//             } else {
//                 num = true
//             }
//         }
//     }
//     return num
// }
// console.log(incriseArr([1, 2, 3]));
// console.log(incriseArr([1, 2, 2]))
// console.log(incriseArr([-3, -2, -1]))
// console.log(incriseArr([1, 2, 3, 7, 213]));
// console.log(incriseArr([1, 2, 2, -1]))
// console.log(incriseArr([-3, -2, -1]))


// exercise 123.

// my solution

// const incArr = (arr) => {
//     let status = false;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] - arr[i] === 1) {
//                 status = true;
//             } else {
//                 status = false;
//             }
//         }
//     }
//     return status;
// }
//
// console.log(incArr([1, 2, 3, 4], 3));
// console.log(incArr([1, 2, 3, 234, 5], 5));
// console.log(incArr([1, 2, 3, 4, 5, 6, 7], 5));


// second solution

// function is_permutation(input_arr, n) {
//     for (var i = 0; i < n; i++) {
//         if (input_arr.indexOf(i + 1) < 0)
//             return false;
//     }
//     return true;
// }
// console.log(is_permutation([1, 2, 3, 4], 3));
// console.log(is_permutation([1, 2, 3, 23432, 5], 5));
// console.log(is_permutation([1, 2, 3, 4, 5, 6, 7], 5));


// exercise 124.

// function nor(a, b) {
//     return (!a && !b)
// }
// console.log(nor(true, false));
// console.log(nor(false, false));
// console.log(nor(true, true));


// exercise 125.

//first solution

// const longStr = arr => {
//     let lgth = 0;
//     let longest;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > lgth) {
//             lgth = arr[i].length;
//             longest = arr[i]
//         }
//     }
//     return longest
// }
//
// console.log(longStr(["ab", "a", "abcd"]));
// console.log(longStr(["ab", "ab", 'wwerwrwrwrewerwrerwerrrw', "ab", '131231233']));

//second solution

// const findLong = arr => {
//     let long = arr.reduce((a, b) => {
//         return a.length > b.length ? a : b
//     })
//     return long
// }
//
// console.log(findLong(["ab", "a", "abcd"]));
// console.log(findLong(["ab", "ab", '23', "ab", '131231233']));

// therd sloution

// function longest_str_in_array(arra) {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));


// exercise 126.

// my solution

// const findLong = arr => {
//     let maXValue = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maXValue && arr[i] % 2 === 0) {
//             maXValue = arr[i]
//         }
//     }
//     return maXValue
// }
// console.log(findLong([20, 40, 200, 5345, 534, 42342347, 66666666666]));
// console.log(findLong([20, 40, 200, 301, 666667]));


//second solution

// function max_even(arra) {
//
//     arra.sort((x, y) => y - x);
//
//     for (var i = 0; i < arra.length; i++) {
//         if (arra[i] % 2 === 0)
//             return arra[i];
//     }
// }
//
// console.log(max_even([20, 40, 200]));
// console.log(max_even([20, 40, 200, 301, 66666, 345345555]));


// exercise 127 not done.


// exercise 128.

//my solution

// const nb = n => {
//     let maxVal = 0;
//     for (let i = n; i < n + 9; i++) {
//         if (n % 10 === 0) {
//             maxVal = n
//         }
//         else {
//             n++
//         }
//     }
//     return maxVal
// }
// console.log(nb(56));
// console.log(nb(582));


// second solution

// const nrnull = num => {
//     while (num % 10){
//         num++
//     }
//     return num
// }
//
// console.log(nrnull(56));
// console.log(nrnull(582));


// exercise 129 not done.


// exercise 130.

// const evenNum = num => {
//     let numStr = num.toString();
//     let temp = 0
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] % 2 === 0) {
//             temp++
//         }
//     }
//     return temp
// }
// console.log(evenNum(55645687685623123));
// console.log(evenNum(1020));
// console.log(evenNum(102));


// exercise 131.

// const colcf = arr => {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = 0;
//         for (let j = 0; j < i + 1; j++) {
//             newArr[i] += arr[j]
//         }
//     }
//     return newArr
// }
// console.log(colcf([1, 2, 3, 4, 5]));
// console.log(colcf([1, 2, -3, 4, 5]));


// exercise 132 not done.


// exercise 133.

// const fraction = arr => {
//     return Math.abs(arr[0] / arr[1]) < 1
//     ? "true" : 'false'
// }
// console.log(fraction([12, 300]));
// console.log(fraction([2, 4]));
// console.log(fraction([103, 3]));
// console.log(fraction([104, 2]));
// console.log(fraction([5, 40]));


// exercise 134.

// const changeChar = str => {
//     var rlt = [];
//     for (let i = 0; i < str.length; i++) {
//         var char_order = str.charCodeAt(i) - 'a'.charCodeAt(0),
//             change_char = 25 - char_order + 'a'.charCodeAt(0);
//         rlt.push(String.fromCharCode(change_char))
//     }
//     return rlt.join('')
// }
//
// console.log(changeChar("abcxyz"));
// console.log(changeChar("python"));


// exercise 135.


// const removeNum = str => {
//     let arrChar = str.split('');
//     let restArr = [];
//     for (let i = 0; i<arrChar.length; i++){
//         if (str.indexOf(arrChar[i])===str.lastIndexOf(arrChar[i])){
//             restArr.push(arrChar[i])
//         }
//     }
//     return restArr.join('')
// }
//
// console.log(removeNum("abcdabc"));
// console.log(removeNum("python"));
// console.log(removeNum("abcabc"));
// console.log(removeNum("1365451"));


// exercise 136.

// const findNumb = str => {
//     return str.replace(/[0-9]/, '$');
// }
//
// console.log(findNumb("abc1dabc"));
// console.log(findNumb("p3ython"));
// console.log(findNumb("ab1cabc"));


// exercise 138.


// first
// const fifteen = number => {
//     if (number <= 15) {
//         return 15
//     } else {
//         return number
//     }
// }
//
// console.log(fifteen("123"));
// console.log(fifteen("10"));
// console.log(fifteen("5"));


//second
// function test_fifteen(num) {
//     while (num < 15) {
//         num++;
//     }
//     return num;
// }
//
// console.log(test_fifteen("123"));
// console.log(test_fifteen("10"));
// console.log(test_fifteen("5"));


// exercise 139.

// const tenFin = arr => {
//     let int = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 === 0) {
//             int = i
//         }
//     }
//     return int
// }
// console.log(tenFin([1, 22, 30, 54, 56]));
// console.log(tenFin([1, 22, 32, 54, 56]));
// console.log(tenFin([1, 22, 32, 54, 50]));

// exercise 140.


// const sameNums = num => {
//     let numString = num.toString().split('');
//     let sts = false;
//     numString.sort((a, b) => {
//         if (a === b) {
//             return true
//         }
//     })
// }
//
// console.log(sameNums(1234));
// console.log(sameNums(1111));
// console.log(sameNums(22222222));






