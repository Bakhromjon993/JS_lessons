
function name(string) {
    eval(`var ${string} = 'hello world'`)

    console.log(string)
}

name('some')

