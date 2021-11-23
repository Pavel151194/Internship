const $buttons = document.querySelectorAll('.button')

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

// const countClicks = (element) => {
//     let counter = 0
//     return () => {
//         ++counter
//         element.innerText = counter
//     }
// }

// $buttons.forEach(button => button.addEventListener('click', countClicks(button)))