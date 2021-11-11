const user = {}

do { 
    user.lastName = prompt("Enter your last name")
} while (!user.lastName)

do { 
    user.firstName = prompt("Enter your first name")
} while (!user.firstName)

do {
    user.middleName = prompt("Enter your middle name")
} while (!user.middleName)

do {
    user.age = Number(prompt("Enter your age"))
} while (!user.age)

user.gender = confirm("Are you a male?")

alert(`
    Ваше ФИО: ${user.lastName} ${user.firstName} ${user.middleName}\n
    Ваш возраст в годах: ${user.age}\n
    Ваш возраст в днях:  ${user.age * 365}\n
    ${user.age > 18 ? "Вы уже совершеннолетний" : "Вы eще не совершеннолетний"}\n
    Ваш пол: ${user.gender ? "мужской" : "женский"}\n
    Вы на пенсии: ${user.age >= 60 ? "да" : "нет"}
`)