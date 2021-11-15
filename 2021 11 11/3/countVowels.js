const countVowelLetters = (str) => {
    const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

    const result = str.split("").filter(el => vowels.indexOf(el) >= 0)

    return result.length
}

console.log(countVowelLetters("Пришла зима, запахло"))