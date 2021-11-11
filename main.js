let userLastName;
let userFirstName;
let userMiddleName;
let userAge;
let userGender;

do {
    userLastName = prompt('Назовите вашу Фамилию', 'Макаревич')
} while (+userLastName || userLastName.length > 15 || !isNaN(userLastName))

do {
    userFirstName = prompt('Назовите ваше Имя', 'Андрей')
} while (+userFirstName || userFirstName.length > 15 || !isNaN(userFirstName))

do {
    userMiddleName = prompt('Назовите ваше Отчество', 'Васильевич')
} while (+userMiddleName || userMiddleName.length > 15 || !isNaN(userMiddleName))

do {
    userAge = prompt('Сколько вам полных лет', 23)
} while (userAge <= 0 || isNaN(userAge) || userAge >= 100)

userGender = confirm('Ваш пол - мужской?') 

alert(` 
        Ваше ФИО: ${userLastName} ${userFirstName} ${userMiddleName} \n
        Ваш возраст в годах: ${userAge} \n
        Ваш возраст в днях: ${userAge * 365} \n
        Вы ${userAge >= 18 ? 'уже совершеннолетний' : 'еще несовершеннолетний'} \n
        Ваш пол: ${userGender ? 'мужской':'женский'} \n 
        Вы на пенсии: ${userAge >= 60 ? 'да' : 'нет'}
     `)