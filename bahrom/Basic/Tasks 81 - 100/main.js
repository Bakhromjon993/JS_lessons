/* TASK 81 */

// function add_two_digits(digit) {
//     return digit.toString().split('').map((item) => +item).reduce((accumulator, currVal ) => accumulator + currVal)
// }
//
// console.log(add_two_digits(25))
// console.log(add_two_digits(5552))

/* TASK 82 */

// function add_two_int_without_carrying(arr1, arr2) {
//     arr1 = arr1.toString()
//     arr2 = arr2.toString()
//     let tot = ''
//     for (let i = 0; i < arr1.length; i++) {
//         let firstN = +arr1[i]
//         let secondN = +arr2[i]
//         tot += ((firstN + secondN)%10).toString()
//     }
//     return tot
// }
//
// console.log(add_two_int_without_carrying(322, 911))
// console.log(add_two_int_without_carrying(200, 900))

/* TASK 83 */

// function longest_string(arr) {
//     let newArr = {
//         index: 0,
//         length: 0,
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.length < arr[i].length){
//             newArr = {index: i, length: arr[i].length}
//         }
//     }
//     return arr[newArr.index]
// }

// console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))

/* TASK 84 */

// function alphabet_char_Shift(string) {
//     return string.split('').map(item => {
//         if (item === 'z'){
//             return item.charCode = 97
//         } else {
//             return item.charCodeAt(item) + 1
//         }
//     }).map(item => {
//         return String.fromCharCode(item)
//     }).join('')
// }
//
//
// console.log(alphabet_char_Shift("abcdxyz"))

/* TASK 85 */

// function alternate_Sums(arr) {
//     let newArr1 = []
//     let newArr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0){
//             newArr1.push(arr[i])
//         } else {
//             newArr2.push(arr[i])
//         }
//     }
//     return `${newArr1.reduce((acc, curVal) => acc + curVal, 0 )} | ${newArr2.reduce((acc, curVal) => acc + curVal, 0 )}`
// }
//
// console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))

/* TASK 86 */

// function angle_Type(angle) {
//     if (angle >= 0 && angle < 90) {
//         return 'Acute angle'
//     }
//     if (angle === 90){
//         return 'Right Angle'
//     }
//     if (angle > 90 && angle < 180){
//         return 'Obtuse Angle'
//     }
//     if (angle === 180){
//         return "Straight angle"
//     }
// }
//
// console.log(angle_Type(47))
// console.log(angle_Type(90))
// console.log(angle_Type(145))
// console.log(angle_Type(180))

/* TASK 87 */

// function array_checking(arr1, arr2) {
//
// }
//
// console.log(array_checking([10,20,30], [10,20,30]))
// console.log(array_checking([10,20,30], [30,10,20]))
// console.log(array_checking([10,20,30,40], [10,30,20,40]))

/* TASK 88 */

// function checking_numbers(x, y, divisior) {
//     return x % divisior === 0 && y % divisior === 0 || x % divisior !== 0 && y % divisior !== 0;
// }
//
// console.log(checking_numbers(10, 25, 5))
// console.log(checking_numbers(10, 20, 5))
// console.log(checking_numbers(10, 20, 4))

/* TASK 89 */

// function check_arithmetic_Expression(x, y, z) {
//     return x + y === z || x - y === z || x * y === z || x / y === z
// }
//
// console.log(check_arithmetic_Expression(10, 25, 35))
// console.log(check_arithmetic_Expression(10, 25, 250))
// console.log(check_arithmetic_Expression(30, 25, 5))
// console.log(check_arithmetic_Expression(100, 25, 4.0))
// console.log(check_arithmetic_Expression(100, 25, 25))

/* TASK 90 */

// function Kth_greatest_in_array(arr, k) {
//     return arr.sort((a, b) => b - a).slice(k - 1, k)
// }
//
// console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
// console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

/* TASK 91 */

// function array_max_consecutive_sum(arr, k) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = k-1; j--;) {
//             let temp_sum = arr[i]
//             if (arr[i + j+1]){
//                 temp_sum+=arr[i+j+1]
//             }
//
//             if(max< temp_sum) max = temp_sum
//         }
//
//     }
//     return max
//
// }
//
// console.log(array_max_consecutive_sum([1, 2, 3, 14, 6], 3))
// console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
// console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))

/* TASK 92 */

// function max_difference(arr) {
//     let max = -1
//     let temp_val = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         temp_val = Math.abs([arr[i] - arr[i + 1]])
//         max = Math.max(max, temp_val)
//     }
//     return max
// }
//
// console.log(max_difference([1, 2, 3, 8, 9]))
// console.log(max_difference([1, 2, 3, 18, 9]))
// console.log(max_difference([13, 2, 3, 8, 9]))

/* TASK 93 */

// function array_max_diff(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             console.log(arr[i] + arr[j])
//         }
//     }
//     return max
// }
//
// console.log(array_max_diff([1, 2, 3, 8, 9]))
// console.log(array_max_diff([1, 2, 3, 18, 9]))
// console.log(array_max_diff([13, 2, 3, 8, 9]))

/* TASK 94 */

// function asd(arr) {
//     let newObj = {
//         num: 0,
//         max: 0
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (newObj[arr[i]]){
//             newObj[arr[i]]++
//             if (newObj[arr[i]] > newObj.max){
//                 newObj.max = newObj[arr[i]]
//                 newObj.num = arr[i]
//             }
//         } else {
//            newObj[arr[i]] = 1
//         }
//     }
//     return `${newObj.num} is repeated ${newObj.max} times`
// }
//
// console.log(asd([1,2,3,2,2,8,2,1,9]))

/* TASK 95 */

// function array_element_replace(arr, del, rep) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === del){
//             arr[i] = rep
//         }
//     }
//     return arr
// }
//
// num = [1, 2, 3, 2, 2, 8, 1, 9];
// console.log("Original Array: "+num);
// console.log(array_element_replace(num, 2, 5));

/* TASK 96 */

// function sum_adjacent_difference(arr) {
//     let result = 0
//     for (let i = 1; i < arr.length; i++) {
//         result += Math.abs(arr[i] - arr[i - 1])
//     }
//     return result
// }
//
// console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

/* TASK 97 */




/* TASK 98 */

// function change_case(string) {
//     let x = 0
//     let y = 0
//
//     for (let i = 0; i < string.length; i++) {
//         if (/[A-Z]/.test(string[i])){
//             x++
//         } else {
//             y++
//         }
//     }
//
//     if(x > y){
//         return string.toUpperCase()
//     } return string.toLowerCase()
// }
//
// console.log(change_case("Write"))
// console.log(change_case("PHp"))

/* TASK 99 */

// function rearrangement_characters(str1, str2) {
//     let first = str1.split('').sort()
//     let second = str2.split('').sort()
//     let result = true
//
//
//     for (let i = 0; i < Math.max(first.length, second.length); i++) {
//         if(first[i] !== second[i]){
//             return false
//         }
//     }
//     return result
// }
//
// console.log(rearrangement_characters("xyz", "zyx"))
// console.log(rearrangement_characters("xyz", "zyp"))

/* TASK 100 */

// function check_common_element(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) !== -1){
//             return true
//         }
//     }return false
// }
//
// console.log(check_common_element([1,2,3], [3,4,5]));
// console.log(check_common_element([1,2,3], [5,6,7]));