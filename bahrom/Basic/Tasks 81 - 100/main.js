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

function array_max_consecutive_sum(arr, k) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        for(let j = k-1; j--;) {
            let temp_sum = arr[i]
            if (arr[i + j+1]){
                temp_sum+=arr[i+j+1]
            }

            if(max< temp_sum) max = temp_sum
        }

    }
    return max

}

console.log(array_max_consecutive_sum([1, 2, 3, 14, 6], 3))
// console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
// console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))



