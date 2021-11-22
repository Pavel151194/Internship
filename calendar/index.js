import { $yearList, $monthList, $daysField, $datesField, $calendarOptionButtons, $showCalendar, $decreaseYear, $increaseYear } from "./DOMs.js"
import { Calendar } from "./Calendar.js"

const calendar = new Calendar(10)

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
    calendar.create().showCalendar($datesField, $daysField)
})