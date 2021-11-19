const pow = (x) => (n) => {
    const example = `Результат ${x}^${n} =`

    if (n === 0) return `${example} 1`
    if (n === 1) return `${example} ${x}`
    if (n < 0) return pow(x)(n + 1) / x
    if (n > 1) return pow(x)(n - 1) * x
}

const calculate = (a) => (op) => (b) => {
    const example = `Результат ${a} ${op} ${b} =`

    if (op === "+") return `${example} ${a + b}`
    if (op === "-") return `${example} ${a - b}`
    if (op === "*") return `${example} ${a * b}`
    if (op === "/") return `${example} ${a / b}`
}

console.log(pow(-2)(3))
console.log(calculate(1)("+")(2))