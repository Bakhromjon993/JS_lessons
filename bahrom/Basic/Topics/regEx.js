let text = "Welcome to Uzbekistan 101"
let b = text.replace(/[w]/i, 'H')
let a = text.replace(/\d/g, '202')
console.log(b, a)

let w = "Hello World".match(/W/g)
let t = /[/s]/g.test("Assalom Uzbekistan")
console.log(w, t)

let s =   "Hellooo World! Hello W3Schools!";
console.log(s.match(/\w+@\w\.\w+/g))