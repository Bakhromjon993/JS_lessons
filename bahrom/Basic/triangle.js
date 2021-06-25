// const btn = document.getElementById('guessBtn')
//
// const max = 10
// let randNum = Math.floor(Math.random() * max)
//
// let lives = 3
//
// btn.addEventListener('click', () => {
//     const guess = document.getElementById('guess').value
//     console.log(randNum)
//     if (lives > 0) {
//         if (guess > randNum) {
//             console.log('Please guess lower')
//             lives--
//         }
//         if (guess < randNum) {
//             console.log('Please guess higher')
//             lives--
//         }
//         if (+guess == randNum) {
//             console.log('Congratulations you WON!!!')
//         }
//     } else {
//         console.log('You are out of lives!')
//     }
// })


function name(string) {
    eval(`var ${string} = 'hello world'`)

    console.log(string)
}

name('some')

