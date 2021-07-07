/* TASK 61 */

// function twoStrings(str1, str2) {
//     return str1.substr(1) + str2.substr(1)
// }
//
// console.log(twoStrings('PHP', 'JS'))

/* TASK 62 */

// function right_three(string) {
//     return string.substr(string.length - 3) + string.substr(0, string.length - 3)
// }
//
// console.log(right_three("Python"));
// console.log(right_three("JavaScript"));
// console.log(right_three("Hi"));

/* TASK 63 */

// function middle_three(string) {
//     if (string.length % 2 !== 0){
//         let mid = (string.length + 1) /2
//         return string.slice(mid - 2, mid + 1)
//     }
//     return string
// }
// console.log(middle_three('abcdefg'));
// console.log(middle_three('HTML5'));
// console.log(middle_three('Python'));
// console.log(middle_three('PHP'));
// console.log(middle_three('Exercises'));

/* TASK 64 */

// function str_con_cat(str1, str2) {
//     let min = Math.min(str1.length, str2.length)
//
//     return str1.substr(str1.length - min) + str2.substr(str2.length - min)
//     // if (str1.length > str2.length){
//     //     return str1.substr(str1.length - str2.length, str1.length - str2.length) + str2
//     // } else if (str2.length > str1.length){
//     //     return str1 + str2.substr(str2.length - str1.length, str2.length - str1.length)
//     // }
// }
//
// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));

/* TASK 65 */

// function end_script(string) {
//     if (string.length >= 6){
//         return string.substr(string.length - 6, string.length - 1) === 'Script';
//     } else {
//         return false
//     }
// }
//
// console.log(end_script("JavaScript"));
// console.log(end_script("Java Script"));
// console.log(end_script("Java Scripts"));

/* TASK 66 */

// function city_name(string) {
//     if (string.length >= 3 && (string.substring(0, 3) === "New") || (string.substring(0, 3) === 'Los')){
//         return string
//     } else {
//         return false
//     }
// }
//
// console.log(city_name("New York"));
// console.log(city_name("Los Angeles"));
// console.log(city_name("London"));

/* TASK 67 */

// function nop(string) {
//     let first = string.slice(0, 1)
//     let last = string.substr(string.length - 1)
//     if (first === last){
//         return string.substr(1, string.length - 2)
//     } else {
//         return string
//     }
// }
//
// console.log(nop("PythonP"));
// console.log(nop("Python"));
// console.log(nop("JavaScript"));


/* TASK 68 */

// function two_string(string, num) {
//     return string.substr(0, num) + string.substr(string.length - num, string.length - 1)
// }
//
// console.log(two_string("JavaScript", 2));
// console.log(two_string("JavaScript", 3));

/* TASK 69 */

// function sum_three(nums) {
//     // return nums.reduce((arr, item) => {
//     //     return arr += item
//     // })
//
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum
// }
//
// console.log(sum_three([10, 32, 20]));
// console.log(sum_three([5, 7, 9]));
// console.log(sum_three([0, 8, -11]));

/* TASK 70 */

// function rotate_elements_left(arr) {
//     return arr.reverse()
// }
//
// console.log(rotate_elements_left([3, 4, 5]));
// console.log(rotate_elements_left([0, -1, 2]));
// console.log(rotate_elements_left([7, 6, 5]));

/* TASK 71 */




