export class Calendar {  
    constructor(numberOfYears) {
        this.yearList = [...Array(numberOfYears)].map((_, i) => new Date().getFullYear() - i)
        this.monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        this.dayList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    }

    init() {
        this.calendar = "<tr>"
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

    createCalendar(datesField, daysField) {
        
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
       
        datesField.innerHTML = this.calendar
        daysField.innerHTML = this.dayList.map(day => `<td>${day}</td>`)

        return this
    }

    show(datesField, daysField) {
        this.init()
        this.createCalendar(datesField, daysField)
    }
}