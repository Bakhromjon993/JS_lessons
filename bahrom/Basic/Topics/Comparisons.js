// let age = 121
// let votable = (age < 18) ? "Too young" : "Old enough"
// console.log(votable)
let day
switch (new Date().getDay()){
    default:
        day = "monday"
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
}

console.log('Today is '+ day)
let x = 1
switch (x) {
    case 0:
        text = 'off'
        break
    case 1:
        text = 'on'
        break
    default:
        text = 'No value found'
}
console.log(text)

let fruit = 'Apple'
switch (fruit) {
    default:
        text = 'Please specify fruit'
        break
    case 'Banana':
        text = 'Hello'
        break
    case 'Apple':
        text = 'Welcome'
        break
}
console.log(text)