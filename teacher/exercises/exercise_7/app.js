// // 87

// const compareArrays = (arrOne, arrTwo) => {
//     let result = true;
//     arrOne.map((item, index) => {
//         let chance = 0;
//         if (arrTwo[index] !== item && chance < 2) {
//             if (arrTwo.includes(item)) {
//                 chance++;
//             } else {
//                 result = false;
//             }
//         } else {
//             result = false;
//         }
//     });
//     return result;
// };

// console.log(compareArrays([10,20,30], [10,20,30]));
// console.log(compareArrays([10,20,30], [30,10,20]));
// console.log(compareArrays([10,20,30,40], [10,30,20,40]));


// // 90

// const findKthGreatest = (numbers, k) => {
//     return numbers.sort((a, b) => {
//         return b - a;
//     })[k - 1];
// };

// console.log(findKthGreatest([1, 2, 6, 4, 5], 3));


// // 91 


// const findMaxSum = (nums, k) => {
//     let result = 0;
//     let temp_sum = 0;
//     for (var i = 0; i < k - 1; i++) {
//         temp_sum += nums[i];
//     }
//     for (var i = k - 1; i < nums.length; i++) {
//         temp_sum += nums[i];
//         if (temp_sum > result) {
//             result = temp_sum;
//         }
//         temp_sum -= nums[i - k + 1];
//     }
//     return result;
// };


// console.log(findMaxSum([1, 2, 3, 14, 5], 2));
// console.log(findMaxSum([2, 3, 5, 1, 6], 3));
// console.log(findMaxSum([9, 3, 5, 1, 7], 2));


// 94

const findMostRepeated = (numbers) => {
    var ctr = [],
        ans = 0;

    for (var i = 0; i < 10; i++) {
        ctr.push(0);
    }

    for (var i = 0; i < arr.length; i++) {
        ctr[arr[i] - 1]++;
        if (ctr[arr[i] - 1] > ctr[ans]) {
            ans = arr[i] - 1;
        }
    }
    return ans + 1;  
};

console.log(findMostRepeated([1, 2, 3, 2, 2, 8, 1, 9]));