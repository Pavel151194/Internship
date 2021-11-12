const zero = (op) => {
    if (!op) return () => 0
    return op(0)
}
const one = (op) => {
    if (!op) return () => 1
    return op(1)
}
const two = (op) => {
    if (!op) return () => 2
    return op(2)
}
const three = (op) => {
    if (!op) return () => 3
    return op(3)
}
const four = (op) => {
    if (!op) return () => 4
    return op(4)
}
const five = (op) => {
    if (!op) return () => 5
    return op(5)
}
const six = (op) => {
    if (!op) return () => 6
    return op(6)
}
const seven = (op) => {
    if (!op) return () => 7
    return op(7)
}
const eight = (op) => {
    if (!op) return () => 8
    return op(8)
}
const nine = (op) => {
    if (!op) return () => 9
    return op(9)
}

const plus = (rightOp) => (leftOp) => `${leftOp} + ${rightOp()} = ${leftOp + rightOp()}`
const minus = (rightOp) => (leftOp) => `${leftOp} - ${rightOp()} = ${leftOp - rightOp()}`
const times = (rightOp) => (leftOp) => `${leftOp} * ${rightOp()} = ${leftOp * rightOp()}`
const dividedBy = (rightOp) => (leftOp) => `${leftOp} / ${rightOp()} = ${leftOp / rightOp()}`