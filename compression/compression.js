const compress = (string) => {
    const resultObj = {}

    string.split("").sort().forEach(el => resultObj[el] = (resultObj[el] || 0) + 1)

    return Object.entries(resultObj).flat().filter(el => el !== 1).join("")
}

console.log(compress("bbbccccaa"))

const uncompress = (string) => {
    const mass = [...string]

    const multiplicate = (letter, count = 1) => {
        let result = ""
        for (let i = 0; i < count; i ++) result += letter
        return result
    }

    mass.reduce((acc, letter, i, arr) => {
        if (acc !== letter) arr.splice( i - 1, 1, multiplicate(acc, letter) )
        if (i === arr.length - 1) arr.splice(-1, 1)
        return letter
    })

    return mass.join("")
}

console.log(uncompress("a2b3"))