const $addRecipe = document.querySelector(".add_recipe")
const $showRecipe = document.querySelector(".show_recipe")
const $deleteRecipe = document.querySelector(".delete_recipe")
const $showAllCocktails = document.querySelector(".show_all_cocktails")
const result = document.querySelector(".result")

class HashStorage {
    constructor() {
        this.storage = {}
    }

    addValue(key, value) {
        this.storage[key] = value
    }

    getValue(key) {
        return this.storage[key]
    }

    deleteValue(key) {
        if (!(key in this.storage)) return false
        return delete this.storage[key]
    }

    getKeys() {
        return Object.keys(this.storage)
    }
}

const cocktailsStorage = new HashStorage

let cocktailName = ""
let cocktailIngredients = []
let cocktailRecipe = ""

$addRecipe.addEventListener("click", () => {
	cocktailName = prompt("Название рацепта")

    cocktailRecipe = prompt("Ингридиенты")
    cocktailsStorage.addValue(cocktailName, cocktailIngredients)

	cocktailRecipe = prompt("Рецепт")
	cocktailsStorage.addValue(cocktailName, cocktailRecipe)
})

$showRecipe.addEventListener("click", () => {
	cocktailName = prompt("Название рацепта")

    cocktailsStorage.getValue(cocktailName)
    ? result.innerText = cocktailsStorage.getValue(cocktailName)
    : result.innerText = "нет такого рецепта"
})

$deleteRecipe.addEventListener("click", () => {
	cocktailName = prompt("Название рацепта")
	result.innerText = cocktailsStorage.deleteValue(cocktailName)
})

$showAllCocktails.addEventListener("click", () => {
	result.innerText = cocktailsStorage.getKeys()   
})