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

// const max = 11
// let randomNumber = Math.floor(Math.random() * max)
// let lives = 3
// console.log(randomNumber)
//
// const btn = document.getElementById('btn')
// btn.addEventListener('click', function () {
//     let inputNum = document.getElementById('random').value
//     if (lives > 0){
//         if (randomNumber > inputNum){
//             console.log('Guess higher')
//             lives--
//         }
//         if (randomNumber < inputNum) {
//             console.log('Guess Lower')
//             lives--
//         }
//         if (+inputNum === randomNumber) {
//             console.log('Great Job')
//             btn.disabled = true
//         }
//     } else {
//         console.log('You are out of lives')
//     }
// })

/* Task 9 */

// const christmas = new Date('2021-12-31')
// console.log(christmas)
// const daysLeft = Math.floor(Math.ceil(christmas - new Date().getTime()) / (1000 * 60 * 60 *24))
//
// console.log(`Till New Year: ${daysLeft} days left!`)

/* Task 10 */

// function calculate(a, b, method) {
// 	let total = 0
// 	if (method === '/'){
// 		total = a / b
// 	}
// 	if (method === '*'){
// 		total = a * b
// 	}
// 	console.log(total)
// }
// calculate(2,4, '/')

/* Task 11 */

// function farToCel(temp) {
// 	let cel = (5 * (temp-32)) /9
// 	console.log(cel)
// }
// farToCel(89)
//
// function celToFar(temp) {
// 	let far = (9 * temp + (32 * 5)) / 5
// 	console.log(far)
// }
// celToFar(31.6666666668)

/* Task 12 */

// console.log(document.URL)
// console.log(window.location.href)

/* Task 13 */

// function userDefinedName(name) {
// 	this[name] = 'sadsad'
// 	console.log(this[name])
// }
// userDefinedName('bb')

/* Task 14 */

// let file = 'index.com'
// let amn = 'ssaass, asdas, dsadas,'
// let qwe = 'myArray[0]'
// console.log(qwe.split('['))
// console.log(amn.split(','))
// console.log(file.split('.').pop())

/* Task 15 */

// function difference(num) {
// 	let sum = 0
// 	if (num > 13){
// 		sum = (num - 13) * 2
// 	} else {
// 		sum = 13 - num
// 	}
// 	console.log(sum)
// }
// difference(11)

/* Task 16 */

// function sumOfTwo(a, b) {
// 	let sum = 0
// 	if(a === b) {
// 		sum = (a + b) * 3
// 	} else {
// 		sum = a + b
// 	}
// 	console.log(sum)
// }
// sumOfTwo(10,20)
// sumOfTwo(10,10)

/* Task 17 */

// function difference(num) {
// 	let sum = 0
// 	if (num > 19){
// 		sum = (num - 19) * 3
// 	} else {
// 		sum = 19 - num
// 	}
// 	console.log(sum)
// }
// difference(12)
// difference(19)
// difference(22)

/* Task 18 */

// function checkNums(a, b) {
// 	if (a === 50 || b === 50 || a + b === 50){
// 		console.log(true)
// 	} else {
// 		console.log(false)
// 	}
// }
// checkNums(20,30)
// checkNums(50,30)
// checkNums(10,10)
// checkNums(20,20)

/* Task 19 */

// function isBetween(num) {
// 	return Math.ceil(100 - num) <= 20 || (Math.ceil(400 - num) <= 20)
// }
//
// console.log(isBetween(10))

/* Task 20 */

// function positive_negative(a, b) {
// 	return a > 0 && b < 0 || a < 0 && b > 0
// }
//
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));

/* Task 21 */

// function getName(name) {
// 	const firstLetters = name.slice(0,2)
// 	let word = ''
// 	if (firstLetters === 'Py'){
// 		console.log(name)
// 	} else {
// 		word = 'Py' + name
// 	}
// 	return word
// }
//
// console.log(getName('Python'))

/* Task 22 */

// function remove_character(word, charAt) {
// 	let start = word.slice(0, charAt)
// 	let end = word.slice(charAt + 1)
// 	return start + end
// }
//
// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

/* Task 23 */

// function reverseLetters(word) {
// 	let first = word.slice(0, 1)
// 	let last = word.slice(word.length -1, word.length)
// 	let middle = word.slice(1, word.length -1)
// 	word =last + middle + first
// 	return word
// }
//
// console.log(reverseLetters('Swift'))
// console.log(reverseLetters('Python'))

/* Task 24 */

// function firstLetter(word) {
// 	let first = word.slice(0, 1)
// 	return word = first + word + first
// }
//
// console.log(firstLetter('Swift'))

/* Task 25 */

// function test37(numb) {
// 	return numb % 3 === 0 || numb % 7 === 0;
// }
//
// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));

/* Task 26 */

// function lastThreeLetters(word) {
// 	let first = word.slice(word.length - 3, word.length)
// 	return word = first + word + first
// }
//
// console.log(lastThreeLetters('Swift'))

/* Task 27 */

// function firstWords(word) {
// 	let sent = word.substring(0, 4)
// 	return sent.toLowerCase() === "java";
// }
//
// console.log(firstWords('JavaScript'))
// console.log(firstWords('Java'))
// console.log(firstWords('Python'))

/* Task 28 */

// function inRange(a, b) {
// 	return 50 <= a && a <= 99 || 50 <= b && b <= 99;
// }
//
// console.log(inRange(12, 101))
// console.log(inRange(52, 80))
// console.log(inRange(15, 99))

/* Task 29 */

// function check_three_nums(a, b, c) {
// 	return 50 <= a && a <= 99 || 50 <= b && b <= 99 || 50 <= c && c <= 99;
// }
//
// console.log(check_three_nums(50, 90, 99));
// console.log(check_three_nums(5, 9, 199));
// console.log(check_three_nums(65, 89, 199));
// console.log(check_three_nums(65, 9, 199));

/* Task 30 */

// function check_script(word) {
// 	let sent = word.substr(4)
// 	return sent === 'Script' ? word.substr(0, 4) : word
// }
//
// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

/* Task 31 */

// function max_of_three(a, b, c) {
// 	let max = 0
// 	if (a > b){
// 		max = a
// 		if (max > c){
// 			return max
// 		} else {
// 			return max = c
// 		}
// 	} else {
// 		max = b
// 		if (max > b){
// 			return max
// 		} else {
// 			return max = c
// 		}
// 	}
// }
//
// console.log(max_of_three(1,0,1));
// console.log(max_of_three(0,-10,-20));
// console.log(max_of_three(1000,510,440));

/* Task 32 */

// function near_100(a, b) {
//   if ((a - b) - 100 > (b - a) - 100){
//     return `${a} is closer to 100`
//   } else if (a === b){
//     return false
//   }
//   else {
//     return `${b} is closer to 100`
//   }
//
// }
//
// console.log(near_100(90, 89));
// console.log(near_100(-90, -89));
// console.log(near_100(90, 90));


/* Task 33 */

// function numbers_ranges(a, b) {
// 	return 40 <= a && a <= 60 && 40 <= b && b <= 60 || 70 <= a && a <= 100 && 70 <= b && b <= 100
// }
//
// console.log(numbers_ranges(44, 56));
// console.log(numbers_ranges(70, 95));
// console.log(numbers_ranges(50, 89));

/* Task 34 */

function max_townums_range(a, b) {
	if (40 <= a && a <= 60 && 40 <= b && b <= 60 ) {
		if (a > b) {
			return a
		} else {
			return b
		}
	} else {
		return false
	}
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));

/* Task 35 */










// let items = [
// 	{
// 		items: {
// 			head: 'Sassa',
// 			title: 'sadasd',
// 			text: 'sadsa',
// 			items: ['getMe', 'setMe'],
// 		},
// 		names: {
// 			head: 'Sassa',
// 			title: 'sadasd',
// 			text: 'sadsa',
// 			items: ['getMe', 'setMe'],
// 		},
// 	},
// 	{
// 		nextGen: {
// 			head: 'Sassa',
// 			title: 'sadasd',
// 			text: 'sadsa',
// 			items: ['getMe', 'setMe'],
// 		},
// 	}
// ]
//
// for (let i = 0; i < items.length; i++) {
// 	const newItterable = Object.keys(items[i])
// 	newItterable.forEach(p => {
// 		Object.keys(items[i][p]).forEach(b => {
// 			if(items[i][p][b] === 'Sassa') {
// 				items[i][p][b] = 'Bahrom'
// 			}
// 			console.log(items[i][p][b])
// 		})
// 	})
// }


// function primeNumber(num) {
// 	let numbers = []
// 	let isPrime = false
// 	for (let i = 0; i <= num; i++) {
// 		for (let j = 2; j <= i; j++) {
// 			if (i % j === 0 && j !== i){
// 				isPrime = true
// 			}
// 		}
// 		if (isPrime === false){
// 			console.log(i)
// 		}
// 	}
// 	return numbers
// }
//
//
// console.log(primeNumber(50))


// for (let counter = 0; counter <= 100; counter++) {
//
// 	let notPrime = false
// 	for (let i = 2; i <= counter; i++) {
// 		if (counter%i===0 && i!==counter) {
// 			notPrime = true;
// 		}
// 	}
// 	if (notPrime === false) {
// 		console.log(counter);
// 	}
// }

// function isPrime(num) {
// 	let primeNumbers = []
// 	for (let counter = 2; counter <= num; counter++) {
// 		let notPrime = false
// 		for (let i = 2; i <= counter; i++) {
// 			if (counter % i === 0 && i !== counter){
// 				notPrime = true
// 			}
// 		}
// 		if (notPrime === false){
// 			primeNumbers.push(counter)
// 		}
// 	}
// 	return primeNumbers
// }


// function tillNumber(num) {
// 	for (let i = 2; i <= num; i++) {
// 		if(isPrime(i)) {
// 			console.log(i)
// 		}
// 	}
// }
//
// function isPrime(i) {
// 	for (let j = 2; j < i; j++) {
// 		if(i % j === 0) return false
// 	}
// 	return true
// }
//
//
// tillNumber(50)



