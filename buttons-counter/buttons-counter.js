const $buttons = document.querySelectorAll('.button')

const count = (event) => event.target.innerText = +event.target.innerText + 1

$buttons.forEach(el => el.addEventListener('click', (event) => count(event)))