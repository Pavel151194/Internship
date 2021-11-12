const compress = (string) => {
    const resultObj = {}

    string.split("").sort().forEach(el => resultObj[el] = (resultObj[el] || 0) + 1)

    return Object.entries(resultObj).flat().filter(el => el !== 1).join("").toString()
}

const uncompress = (string) => {

    const duplicate = (letter, count = 1) => {
        let result = ""

        for (let i = 0; i < count; i ++) {
            result += letter
        }

        return result
    }
    
    const mass = string.split("")
    
    mass.forEach((el, i, arr) => {
        if (el !== el[i + 1]) {
            arr.splice( i, 2, duplicate(arr[i], arr[i + 1]) )
        }
    })

    return mass.join("")
}