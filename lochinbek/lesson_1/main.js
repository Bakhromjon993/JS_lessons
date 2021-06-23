
// solution 1.

// function compare(obj1, obj2){
//     const keys = Object.keys(obj2)
//     for(let i = 0; i < keys.length; i++){
//         if(obj2[keys[i]] !== obj1[keys[i]]) return false
//     }
//     return true
// }

// console.log(compare({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));
// console.log(compare({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }));
// console.log(compare({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));




// solution 2.




// solution 3.

// let word1 = 'wdafss,dfa,esdf,ssl';
// let word2 = []

// let splitArray = word1.split(',');

// splitArray.forEach((item,index) => {

//         console.log('toq ' + item.charAt(0) + " " + item.slice(-1))
//         word2.push( item.charAt(0), item.slice(-1))
// })
// console.log(word2.slice(1, word2.length - 1))


// solution 7.

// let numbers = 23424324;
// let arrayNums = [];
// function toStringChange() {
//     return String(numbers);
// }
// numbers = toStringChange();
// arrayNums = [...numbers]
// console.log(arrayNums);