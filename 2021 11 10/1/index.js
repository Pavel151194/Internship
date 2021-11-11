let userSurname
let userFirstName
let userFatherName
let userGender
let userAge

do { 
    userSurname = prompt("Enter your surname")
} while (!userSurname)

do { 
    userFirstName = prompt("Enter your first name")
} while (!userFirstName)

do {
    userFatherName = prompt("Enter father's name")
} while (!userFatherName)

do {
    userAge = Number(prompt("Enter your age"))
} while (!userAge)

userGender = confirm("Are you a male?")

alert(`
    Ваше ФИО: ${userSurname} ${userFirstName} ${userFatherName}\n
    Ваш возраст в годах: ${userAge}\n
    Ваш возраст в днях:  ${userAge * 365}\n
    ${userAge > 18 ? "Вы уже совершеннолетний" : "Вы eще не совершеннолетний"}\n
    Ваш пол: ${userGender ? "мужской" : "женский"}\n
    Вы на пенсии: ${userAge >= 60 ? "да" : "нет"}
`)