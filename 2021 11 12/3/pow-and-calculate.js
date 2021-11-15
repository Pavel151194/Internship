const pow = (x) => (n) => {
    if (n === 0) return 1
    if (n === 1) return x
    if (n < 0) return pow(x)(n + 1) / x
    if (n > 1) return pow(x)(n - 1) * x
}

const calculate = (a) => (op) => (b) => {
    if (op === "+") return `Результат ${a} + ${b} = ${(a + b)}`
    if (op === "-") return `Результат ${a} - ${b} = ${(a - b)}`
    if (op === "*") return `Результат ${a} * ${b} = ${(a * b)}`
    if (op === "/") return `Результат ${a} / ${b} = ${(a / b)}`
}

console.log(pow(-2)(3))
console.log(calculate(1)("+")(2))