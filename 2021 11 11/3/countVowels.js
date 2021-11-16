const countVowelLetters = (str) => {
    const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

    return str.split("").filter(el => vowels.indexOf(el) !== -1).length
}

console.log(countVowelLetters("Пришла зима, запахло..."))