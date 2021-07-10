const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// console.log(fruits)
// fruits.push('Ananas')
// console.log(fruits)
//
// fruits.shift()
// console.log(fruits)
// fruits.unshift('Cocos')
// console.log(fruits)

fruits.forEach( item => {
    console.log(item)
})
let a = [1, 2, 4, 5]
console.log(Array.isArray(a))

a.splice(2,0, 3,5,6,7)
console.log(a.sort((a, b) => {
    return a - b
}))

a.unshift(11)
console.log(a)




