const fizzBuzz = (n) => {
    let x = 1
    const mass = [...Array(n)].map(_ => x ++)
    for (let i = 2; i <= n; i += 3) mass[i] = "Fizz"
    for (let i = 4; i <= n; i += 5) mass[i] = "Buzz"
    for (let i = 14; i <= n; i += 15) mass[i] = "FizzBuzz"

    return mass
}

console.log( fizzBuzz(100) )

// mass.forEach((num, i) => {
//     if (num % 3 === 0) mass.splice(i, 1, "Fizz")
//     if (num % 5 === 0) mass.splice(i, 1, "Buzz")
//     if (num % 15 === 0) mass.splice(i, 1, "FizzBuzz")
// })