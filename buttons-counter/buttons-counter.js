const $buttons = document.querySelectorAll('.button')

// const count = (event) => event.target.innerText = +event.target.innerText + 1
// $buttons.forEach(el => el.addEventListener('click', (event) => count(event)))

const increaseCounter = count => () => ++count

$buttons.forEach(button => button.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.button')) {
        const count = target.innerText === '0'
        ? increaseCounter(0)
        : increaseCounter(+target.innerHTML)

        target.innerHTML = count()
    }
}))