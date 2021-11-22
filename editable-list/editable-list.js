const $input = document.querySelector(".input")
const $buttonAdd = document.querySelector(".button_add")
const $buttonDelete = document.querySelector(".button_delete")
const $list = document.querySelector(".list")

const mass = []
$buttonDelete.setAttribute("disabled", true)

const displayList = (input, list) => {
    input.value = ""
    list.innerHTML = ""
    mass.map((el, i) => list.innerHTML += `<li class="list_item" data-id="${i}">${i + 1}.<input type="text" value="${el}"></li>`)
}

document.addEventListener("click", event => {
    const target = event.target

    if (target.classList.contains("button_add")) {
        if ($input.value) {
            mass.push($input.value)
            displayList($input, $list)

            if (mass.length) $buttonDelete.removeAttribute("disabled")
        }
    }

    if (target.classList.contains("button_delete")) {
        if (mass.length) {
            mass.pop()
            displayList($input, $list)

            if (!mass.length) $buttonDelete.setAttribute("disabled", true)
        }
    }
})

document.addEventListener("change", event => {
    const target = event.target

    if (target.closest('.list_item')?.dataset?.id) {
        const id = target.closest('.list_item').dataset.id
        const value = target.closest('.list_item input').value
        
        mass.splice(id, 1, value)
    }
})