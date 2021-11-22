const countVowelLetters = (str) => {
    const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

    return [...str.toLowerCase()].filter(letter => vowels.indexOf(letter) !== -1).length
}

console.log(countVowelLetters("Пришла зима, запахло..."))