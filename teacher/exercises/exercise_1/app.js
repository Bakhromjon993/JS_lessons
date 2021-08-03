// const isLowerTringular = (matrix) => {
//     var matrixLength = matrix.length, 
//         childLength = matrix[0].length,
//         i = 0;
//     for (i; i < matrixLength - 1; i++) {
//         var j = i + 1;
//         for (j; j < childLength; j++) {
//             if (matrix[i][j] !== 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

// console.log(isLowerTringular([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(isLowerTringular([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));

// 1 0 0
// 2 0 0
// 0 3 3



// function lower_triangular_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) 
//          {
//         for (var j = 0; j < user_matrix[0].length; j++) 
//             {
//             if (j > i && user_matrix[i][j] !== 0)
//               return false;
//         }
//     }
//     return true;
// }

// console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));


const reverseBitOrder = (integer) => {
    return parseInt(integer.toString(2).split("").reverse().join(""), 2);
};

console.log(reverseBitOrder(56));

// 56 = 111000   =>  000111 = 7