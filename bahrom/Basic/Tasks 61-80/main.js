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

// function first_last_1(nums) {
//      return nums[0] === 1 || nums[nums.length - 1] === 1;
// }
// console.log(first_last_1([1, 3, 5]));
// console.log(first_last_1([1, 3, 5, 1]));
// console.log(first_last_1([2, 4, 6]));

/* TASK 72 */

// function first_last_same(arrays) {
//     return arrays[0] === arrays[arrays.length - 1]
// }
//
// console.log(first_last_same([10, 20, 30]));
// console.log(first_last_same([10, 20, 30, 10]));
// console.log(first_last_same([20, 20, 20]));

/* TASK 73 */

// function reverse3(array) {
//     return array.reverse()
// }
// console.log(reverse3([5, 4, 3]));
// console.log(reverse3([1, 0, -1]));
// console.log(reverse3([2, 3, 1]));

/* TASK 74 */

// function all_max(nums) {
//
//     return new Array(nums.length).fill(Math.max(...nums))
//
//     // let max = 0
//     // let newArr = []
//     // for (let i=0; i < nums.length; i++){
//     //     if (max < nums[i]){
//     //         max = nums[i]
//     //     }
//     // }
//     // for (let i=0; i < nums.length; i++){
//     //    newArr.push(max)
//     // }
//
//     // var max_val = nums[0] > nums[2] ? nums[0] : nums[2];
//     // nums[0] = max_val
//     // nums[1] = max_val
//     // nums[3] = max_val
//     //
//     // return nums
// }
//
//
// console.log(all_max([20, 30, 40]));
// console.log(all_max([-7, -9, 0]));
// console.log(all_max([12, 10, 3]));

/* TASK 75 */

// function middle_elements(arr1, arr2) {
//     return [arr1[1], arr2[1]]
// }
//
//
// console.log(middle_elements([1, 2, 3], [1, 5, 6]));
// console.log(middle_elements([3, 3, 3], [2, 8, 0]));
// console.log(middle_elements([4, 2, 7], [2, 4, 5]));

/* TASK 76 */

// function started(arr) {
//     return [arr[0], arr[arr.length - 1]]
// }
//
// console.log(started([20, 20, 30]));
// console.log(started([5, 2, 7, 8]));
// console.log(started([17, 12, 34, 78]));

/* TASK 77 */

// function contains13(arr) {
//     // for (let i=0; i < arr.length; i++){
//     //    if (arr[i] === 1 || arr[i] === 3){
//     //        return true
//     //    }
//     // }
//     // return false
//     return arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1;
// }
//
// console.log(contains13([1, 5, 2, 5, 7, 8, 1]));
// console.log(contains13([2, 3]));
// console.log(contains13([7, 5, 2, 6, 3, 6, 7, 9]));

/* TASK 78 */

// function is13(arr) {
//     return arr.indexOf(1) === -1 && arr.indexOf(3) === -1;
// }
//
// console.log(is13([7, 8]));
// console.log(is13([3, 2]));
// console.log(is13([0, 1]));

/* TASK 79 */

// function twice3040(arr) {
//     if (arr.length > 1){
//         let newObj = {}
//         for (let i=0; i<arr.length; i++){
//             if (newObj[arr[i]])
//                 return true
//             newObj[arr[i]] = true
//         }
//     } return false
//
// }
//
// console.log(twice3040([30, 20 ,10, 12]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));

/* TASK 80 */

// function swap(arr) {
//     // return arr.reverse()
//     let newArr = []
//     for (let i = arr.length; i--;) {
//         newArr.push(arr[i])
//     }return newArr
//
// }
//
// console.log(swap([1, 2, 3, 4]));
// console.log(swap([0, 2, 1]));
// console.log(swap([3]));

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

function longest_string(arr) {
    let newArr = {
        item: '',
        length: 0,
    }
    for (let i = 0; i < arr.length; i++) {
        if (newArr[i].length > arr[i].length ){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))


