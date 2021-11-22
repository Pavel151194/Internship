import { $yearList, $monthList, $showCalendar, $datesField } from "./DOMs.js"

class Calendar {  
    constructor() {
        this.yearList = [...Array(100)].map((_, index) => new Date().getFullYear() - index)
        this.monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        this.calendar = "<tr>"
    }

    saveYear(year) {
        this.year = year
    }

    saveMonth(month) {
        this.month = Number(month) + 1
    }

    create() {
        this.lastDateOfMonth = new Date(this.year, this.month, 0).getDate()
        this.fullDate = new Date(this.year, this.month, this.lastDateOfMonth)
        this.lastDayOfMonth = this.fullDate.getDay()
        this.firstDayOfMonth = new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), 1).getDay()
        return this
    }

    addDatesTable(datesField) {
        if (this.firstDayOfMonth !== 0) {
            for (let i = 1; i < this.firstDayOfMonth; i++) this.calendar += "<td></td>"
        } else {
            for (let i = 0; i < 6; i++) this.calendar += "<td></td>"
        }

        for (let i = 1; i <= this.lastDateOfMonth; i++) {
            this.calendar += `<td>${i}</td>`

            if (new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), i).getDay() === 0) {
                this.calendar += "<tr>"
            }
        }

        for (var  i = this.lastDayOfMonth; i < 7; i++) this.calendar += "<td></td>"

        datesField.innerHTML = this.calendar

        return this
    }

    addSelectsLists(yearList, monthList) {
        yearList.innerHTML += this.yearList.map(year => `<option value="${year}">${year}</option>`)
        monthList.innerHTML += this.monthList.map((month, i) => `<option value="${i}">${month}</option>`)
    }
}

const calendar = new Calendar
calendar.addSelectsLists($yearList, $monthList)

$showCalendar.setAttribute("disabled", true)

document.addEventListener("change", event => {
    const target = event.target
    if (target.closest('.month_list')) calendar.saveMonth(target.closest('.month_list').value)
    if (target.closest('.year_list')) calendar.saveYear(target.closest('.year_list').value)
    if (calendar.month && calendar.year) $showCalendar.removeAttribute("disabled")
})

$showCalendar.addEventListener("click", () => {
    calendar.create().addDatesTable($datesField)
})