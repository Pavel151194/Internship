import { $yearList, $monthList, $daysField, $datesField, $calendarOptionButtons, $showCalendar, $decreaseYear, $increaseYear, $decreaseMonth, $increaseMonth } from "./DOMs.js"
import { Calendar } from "./Calendar.js"

const calendar = new Calendar(12)

calendar.addSelectsLists($yearList, $monthList)

$calendarOptionButtons.forEach(button => button.setAttribute("disabled", true))

document.addEventListener("change", event => {
    const target = event.target

    if (target.closest('.month_list')) {
        calendar.saveMonth(target.closest('.month_list').value)
    }
    if (target.closest('.year_list')) {
        calendar.saveYear(target.closest('.year_list').value)
    }
    if (calendar.month && calendar.year) {
        $calendarOptionButtons.forEach(button => button.removeAttribute("disabled"))
    }
})

$showCalendar.addEventListener("click", () => {
    calendar
        .init()
        .showCalendar($datesField, $daysField)
})

$decreaseYear.addEventListener("click", () => {
    const $yearSelect = document.querySelector(".year_list")
    const years = calendar.yearList

    if (years.indexOf(Number($yearSelect.value)) !== years.length - 1) {
        $yearSelect.value = Number($yearSelect.value) - 1

        calendar
            .saveYear($yearSelect.value)
            .init()
            .showCalendar($datesField, $daysField)

    }
})

$increaseYear.addEventListener("click", () => {
    const $yearSelect = document.querySelector(".year_list")
    const years = calendar.yearList

    if (years.indexOf(Number($yearSelect.value)) !== 0) {
        $yearSelect.value = Number($yearSelect.value) + 1

        calendar
            .saveYear($yearSelect.value)
            .init()
            .showCalendar($datesField, $daysField)
    }
})

$decreaseMonth.addEventListener("click", () => {
    const $monthSelect = document.querySelector(".month_list")

    if (Number($monthSelect.value) !== 0) {
        $monthSelect.value = Number($monthSelect.value) - 1

        calendar
            .saveMonth($monthSelect.value)
            .init()
            .showCalendar($datesField, $daysField)
    }
})

$increaseMonth.addEventListener("click", () => {
    const $monthSelect = document.querySelector(".month_list")

    if (Number($monthSelect.value) !== 11) {
        $monthSelect.value = Number($monthSelect.value) + 1

        calendar
            .saveMonth($monthSelect.value)
            .init()
            .showCalendar($datesField, $daysField)
    }
})

document.addEventListener("click", event => {
    const target = event.target
    if (target.closest(".day")){
        document.querySelectorAll(".active").forEach(date => date.classList.remove("active"))
        target.classList.toggle("active")
    }

})