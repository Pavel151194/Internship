const userNumbers = prompt("Enter some numbers")

const numbers = [...userNumbers]

// 1.
numbers.reduce((acc, num, i, arr) => {
    if (!(Number(acc) % 2) && !(Number(num) % 2)) {
        arr.splice(i - 1, 1, `${acc}-`)
    }
    return num
})

alert( numbers.join("") )