// 1
const numbers =  [2, 3, 5, 7, 11, 13, 17]

const currentSums = (mass) => {
    mass.reduce((acc, curr, i, arr) => {
        arr.splice(i, 1, acc + curr)
        return acc + curr
    })

    return mass
}

console.log(currentSums(numbers))

// 2
const str = "Каждый охотник желает знать, где сидит фазан."

const countFirstLetters = (string) => [...string].filter((_, i, arr) => i === 0 || arr[i-1] === " ")

console.log(countFirstLetters(str))

// 3
const changeArray = (array) => {
    let leftSide = []
    let rightSide = []

    if (array.length % 2 === 0) {
        array.map((el, i) => {
            if (i < array.length / 2) leftSide.push(el)
            if (i > array.length / 2 - 1) rightSide.push(el)
        })
    } else {
        array.map((el, i) => {
            if (i < array.length / 2 - 1) leftSide.push(el)
            if (i > array.length / 2) rightSide.push(el)
            if (i === Math.floor(array.length / 2)) leftSide.splice(0, 0, el)
        })
    }
    return rightSide.concat(leftSide)
}

console.log(changeArray([1, 2, 3, 4, 5]))