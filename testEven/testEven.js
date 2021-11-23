const userNumbers = prompt("Enter some numbers")

const numbers = [...userNumbers]


// 1.
numbers.reduce((acc, num, i, arr) => {
    if (Number(acc) % 2 === 0 && Number(num) % 2 === 0) arr.splice(i - 1, 1, `${acc}-`)
    return num
})

alert( numbers.join("") )

// 2. 
for (let i = 1; i < numbers.length; i++){
    if (Number(numbers[i]) % 2 === 0 && Number(numbers[i - 1]) % 2 === 0) {
        numbers.splice(i, 0, "-")
    }
}

alert( numbers.join("") )