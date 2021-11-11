const userSurname = prompt("Enter your surname")
const userFirstName = prompt("Enter your first name")
const userFatherName = prompt("Enter father's name")
const userGender = confirm("Are you a male?")
const userAge = Number(prompt("Enter your age"))

const isEmpty = (str) => str.length > 0 ? str : "invalid data"

const setAge = (age) => Number.isInteger(age) && age !== 0 ? age : "invalid data"

const setDaysOfLife = (age) => Number.isInteger(age) && age !== 0 ? age * 365 : "invalid data"

const isAdult = (age) => {
    if (Number.isInteger(age) && age !== 0) {
        return age > 18 ? "Вы уже совершеннолетний" : "Вы eще не совершеннолетний"
    }
    else return "invalid data"
}

const isRetiree = (age) => {
    if (Number.isInteger(age) && age !== 0) {
        return age >= 60 ? "да" : "нет"
    }
    else return "invalid data"
}

alert(`
    Ваше ФИО: ${isEmpty(userSurname)} ${isEmpty(userFirstName)} ${isEmpty(userFatherName)}\n
    Ваш возраст в годах: ${setAge(userAge)}\n
    Ваш возраст в днях:  ${setDaysOfLife(userAge)}\n
    ${isAdult(userAge)}\n
    Ваш пол: ${userGender ? "мужской" : "женский"}\n
    Вы на пенсии: ${isRetiree(userAge)}
`)