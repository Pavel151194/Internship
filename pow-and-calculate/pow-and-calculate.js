const pow = (num) => (power) => {
    if (power === 0) return 1
    if (power === 1) return num
    if (power < 0) return pow(num)(power + 1) / num
    if (power > 1) return pow(num)(power - 1) * num
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