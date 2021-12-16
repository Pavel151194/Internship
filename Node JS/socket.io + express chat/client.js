const socket = io()
const $messages = document.querySelector('.messages')
const $form = document.querySelector('.form')
const $input = document.querySelector('.input')
const $name = document.querySelector('.name')

const userName = prompt('Enter your name:')

$name.innerText = userName

$form.addEventListener('submit', event => {
    event.preventDefault()

    if ($input.value) {
        socket.emit('message', { message: $input.value, name: userName })
        $input.value = ''
    }
})

socket.on('message', data => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${data.name}</span>: ${data.message}`
    $messages.appendChild(li)
    window.scrollTo(0, document.body.scrollHeight)
})