export class Calendar {  
    constructor(numberOfYears) {
        this.yearList = [...Array(numberOfYears)].map((_, i) => new Date().getFullYear() - i)
        this.monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        this.dayList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    }

    init() {
        this.calendar = `<table class="calendar">`
        this.lastDateOfMonth = new Date(this.year, this.month, 0).getDate()
        this.fullDate = new Date(this.year, this.month - 1, this.lastDateOfMonth)
        this.lastDayOfMonth = this.fullDate.getDay()
        this.firstDayOfMonth = new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), 1).getDay()
        return this
    }

    saveYear(year) {
        this.year = Number(year)
        return this
    }

    saveMonth(month) {
        this.month = Number(month) + 1
        return this
    }

    addSelectsLists(yearList, monthList) {
        yearList.innerHTML += this.yearList.map(year => `<option value="${year}">${year}</option>`)
        monthList.innerHTML += this.monthList.map((month, i) => `<option value="${i}">${month}</option>`)
    }

    createCalendar(element) {
        this.calendar += `<thead>
            <tr><td colspan="7">
                <div class="calendar_head">
                    <button class="calendar_button decrease_year">&#60&#60</button>
                    <button class="calendar_button decrease_month">&#60</button>
                    <p class="calendar_values">${this.monthList[this.fullDate.getMonth()]} ${this.year} года</p>
                    <button class="calendar_button increase_month">&#62</button>
                    <button class="calendar_button increase_year">&#62&#62</button>
                </div>
            </td></tr>
            <tr>${this.dayList.map(day => `<td>${day}</td>`)}</tr>
        </thead>`
        
        if (this.firstDayOfMonth !== 0) {
            for (let i = 1; i < this.firstDayOfMonth; i++) this.calendar += "<td></td>"
        } else {
            for (let i = 0; i < 6; i++) this.calendar += "<td></td>"
        }

        for (let i = 1; i <= this.lastDateOfMonth; i++) {
            this.calendar += `<td class="day">${i}</td>`

            if (new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), i).getDay() === 0) {
                this.calendar += "<tr>"
            }
        }

        if (this.lastDayOfMonth !== 0) {
            for (let i = 1; i <= 7 - this.lastDayOfMonth; i++) this.calendar += "<td></td>"
        }

        this.calendar += "</table>"

        element.innerHTML += this.calendar

        return this
    }

    show(datesField, daysField) {
        this.init()
        this.createCalendar(datesField, daysField)
    }

    remove(element) {
        element.outerHTML = ""
    }

    disableButton(button) {
        button.setAttribute("disabled", true)
    }

    enableButton(button) {
        button.removeAttribute("disabled")
    }
}