import { $yearList, $monthList, $calendars, $calendarOptionButtons, $showCalendar, $removeCalendar } from "./DOMs.js"
import { Calendar } from "./Calendar.js"

const calendar = new Calendar(12)

calendar.addSelectsLists($yearList, $monthList)

$calendarOptionButtons.forEach(button => calendar.disableButton(button))

document.addEventListener("change", event => {
    const $monthSelect = event.target.closest(".month_list")
    const $yearSelect = event.target.closest(".year_list")

    if ($monthSelect) calendar.saveMonth($monthSelect.value)
    if ($yearSelect) calendar.saveYear($yearSelect.value)
    if (calendar.month && calendar.year) calendar.enableButton($showCalendar)
})

$showCalendar.addEventListener("click", () => {
    calendar.show($calendars)
    calendar.enableButton($removeCalendar)
})

$removeCalendar.addEventListener("click", () => {
    const calendars = document.querySelectorAll(".calendar")

    if (calendars.length) {
        calendar.enableButton($removeCalendar)
        calendar.remove(calendars[calendars.length - 1])
    } 

    if (calendars.length === 1) {
        calendar.disableButton($removeCalendar)
    }
})

document.addEventListener("click", event => {
    const $day = event.target.closest(".day")
    const $increaseYear = event.target.closest(".increase_year")
    const $decreaseYear = event.target.closest(".decrease_year")
    const $increaseMonth = event.target.closest(".increase_month")
    const $decreaseMonth = event.target.closest(".decrease_month")

    if ($day) {
        const $actives = document.querySelectorAll(".active")
        $actives.forEach(day => day.classList.remove("active"))
        $day.classList.toggle("active")
    }

    if ($increaseYear) {
        const $calendar = event.target.closest(".calendar")
        $calendar.innerHTML = ""
        calendar.year += 1
        calendar.saveYear(calendar.year).show($calendar)
    }

    if ($decreaseYear) {
        const $calendar = event.target.closest(".calendar")
        $calendar.innerHTML = ""
        calendar.year -= 1
        calendar.saveYear(calendar.year).show($calendar)
    }

    if ($increaseMonth) {
        const $calendar = event.target.closest(".calendar")
        $calendar.innerHTML = ""
        calendar.month += 1 - 1
        calendar.saveMonth(calendar.month).show($calendar)
    }

    if ($decreaseMonth) {
        const $calendar = event.target.closest(".calendar")
        $calendar.innerHTML = ""
        calendar.month -= 2
        calendar.saveMonth(calendar.month).show($calendar)
    }
})