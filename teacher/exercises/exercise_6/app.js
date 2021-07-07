// const hasDuplication = (arr) => {
//     //
// };

// console.log([23, 45, 678, 23]); // true
// console.log([23, 45, 678, 785, -23]); // false


// Ecercise 49

function letters(string) {
    let word = ''
    for(let i = 0; i < string.length; i++){
        word += String.fromCharCode(string.charCodeAt(i) + 1) 
    }
    return word
}

console.log(letters('python'))