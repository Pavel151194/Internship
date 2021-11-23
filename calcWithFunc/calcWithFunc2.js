const calc = (operandOne, operationPart) => {
    const { operator, operandTwo } = operationPart
    const operations = {
        ['+']: () => operandOne + operandTwo,
        ['-']: () => operandOne - operandTwo,
        ['*']: () => operandOne * operandTwo,
        ['/']: () => operandOne / operandTwo,
    }
    const result = operations[operator]()

    return `${operandOne} ${operator} ${operandTwo} = ${result}`
}

const setNumber = (num) => (operationPart) => operationPart ? calc(num, operationPart) : num
const operation = (operator) => (operandTwo) => ({ operator, operandTwo })

const zero = setNumber(0)
const one = setNumber(1)
const two = setNumber(2)
const three = setNumber(3)
const four = setNumber(4)
const five = setNumber(5)
const six = setNumber(6)
const seven = setNumber(7)
const eight = setNumber(8)
const nine = setNumber(9)

const plus = operation('+')
const minus = operation('-')
const times = operation('*')
const dividedBy = operation('/')

console.log( seven(times(five())) )
console.log( four(plus(nine())) )
console.log( eight(minus(three())) )
console.log( six(dividedBy(two())) )