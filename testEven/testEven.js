const userNumbers = prompt("Enter some numbers")

const numbers = [...userNumbers]

for (let i = 1; i < numbers.length; i++){
    if (Number(numbers[i]) % 2 === 0 && Number(numbers[i - 1]) % 2 === 0) {
        numbers.splice(i, 0, "-")
    }
}

alert( numbers.join("").toString() )