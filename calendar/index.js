import { $yearList, $monthList, $daysField, $datesField, $calendarOptionButtons, $showCalendar, $decreaseYear, $increaseYear, $decreaseMonth, $increaseMonth } from "./DOMs.js"
import { Calendar } from "./Calendar.js"

const calendar = new Calendar(12)

calendar.addSelectsLists($yearList, $monthList)

$calendarOptionButtons.forEach(button => button.setAttribute("disabled", true))

document.addEventListener("change", event => {
    const $monthSelect = event.target.closest(".month_list")
    const $yearSelect = event.target.closest(".year_list")

    if ($monthSelect) calendar.saveMonth($monthSelect.value)
    if ($yearSelect) calendar.saveYear($yearSelect.value)
    
    if (calendar.month && calendar.year) {
        $calendarOptionButtons.forEach(button => button.removeAttribute("disabled"))
    }
})

$showCalendar.addEventListener("click", () => {
    calendar.show($datesField, $daysField)
})

$increaseYear.addEventListener("click", () => {
    const $yearSelect = document.querySelector(".year_list")
    const years = calendar.yearList

    if (years.indexOf(Number($yearSelect.value)) !== 0) {
        $yearSelect.value = Number($yearSelect.value) + 1
        calendar.saveYear($yearSelect.value).show($datesField, $daysField)
    }
})

$decreaseYear.addEventListener("click", () => {
    const $yearSelect = document.querySelector(".year_list")
    const years = calendar.yearList

    if (years.indexOf(Number($yearSelect.value)) !== years.length - 1) {
        $yearSelect.value = Number($yearSelect.value) - 1
        calendar.saveYear($yearSelect.value).show($datesField, $daysField)
    }
})

$increaseMonth.addEventListener("click", () => {
    const $monthSelect = document.querySelector(".month_list")

    if (Number($monthSelect.value) !== 11) {
        $monthSelect.value = Number($monthSelect.value) + 1
        calendar.saveMonth($monthSelect.value).show($datesField, $daysField)
    }
})

$decreaseMonth.addEventListener("click", () => {
    const $monthSelect = document.querySelector(".month_list")

    if (Number($monthSelect.value) !== 0) {
        $monthSelect.value = Number($monthSelect.value) - 1
        calendar.saveMonth($monthSelect.value).show($datesField, $daysField)
    }
})

document.addEventListener("click", event => {
    const $day = event.target.closest(".day")

    if ($day) {
        const $actives = document.querySelectorAll(".active")
        $actives.forEach(day => day.classList.remove("active"))
        $day.classList.toggle("active")
    }

})