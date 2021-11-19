const userNumbers = prompt("Enter some numbers")

const numbers = userNumbers.split("").map(num => Number(num))

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] % 2 === 0 && numbers[i - 1] % 2 === 0) {
        numbers.splice(i, 0, "-")
    }
}

alert( numbers.join("").toString() )