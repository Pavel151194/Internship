const fizzBuzz = (n) => {
    let result = []

    for (let i = 1; i <= n; ++i) {
        result.push((i % 3 === 0 && "Fizz" || "") + (i % 5 === 0 && "Buzz" || "") || i)
    }
    
    return result
}

console.log( fizzBuzz(100) )