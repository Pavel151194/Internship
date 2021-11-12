const countVowelLetters = (str) => {
    const massOfVowels = str.split("").filter(el => {
        if (el === "а" || el === "у" || el === "о" || el === "ы" || el === "и" || el === "э" || el === "я" || el === "ю" || el === "ё" || el === "е") {
            return el
        }
    })
    
    return massOfVowels.length
}

console.log(countVowelLetters("Пришла зима, запахло"))