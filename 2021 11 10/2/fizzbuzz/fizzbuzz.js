const fizzBuzz = (n) => {
    let x = 1
    const mass = [...Array(n)].map(_ => x ++)
    for (let i = 2; i <= n; i += 3) mass[i] = "Fizz"
    for (let i = 4; i <= n; i += 5) mass[i] = "Buzz"
    for (let i = 14; i <= n; i += 15) mass[i] = "FizzBuzz"
    return mass
}

console.log( fizzBuzz(100) )