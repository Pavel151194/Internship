class Calendar {
    constructor(year, month) {
        this.lastDateOfMonth = new Date(year, month + 1, 0).getDate()
        this.fullDate = new Date(year, month, this.lastDateOfMonth)
        this.lastDayOfMonth = this.fullDate.getDay()
        this.firstDayOfMonth = new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), 1).getDay()
        this.calendar = '<tr>'
    }

    create(yearField, datesField){
        if (this.firstDayOfMonth !== 0) {
            for (let  i = 1; i < this.firstDayOfMonth; i++) this.calendar += '<td></td>'
        } else {
            for (let  i = 0; i < 6; i++) this.calendar += '<td></td>'
        }

        for (let i = 1; i <= this.lastDateOfMonth; i++) {
            if (i === new Date().getDate() && this.fullDate.getFullYear() === new Date().getFullYear() && this.fullDate.getMonth() === new Date().getMonth()) {
                this.calendar += `<td>${i}</td>`
            } else {
                this.calendar += `<td>${i}</td>`
            }

            if (new Date(this.fullDate.getFullYear(), this.fullDate.getMonth(), i).getDay() === 0) {
                this.calendar += '<tr>'
            }
        }

        for (var  i = this.lastDayOfMonth; i < 7; i++) this.calendar += '<td></td>'

        yearField.value = this.fullDate.getFullYear()
        datesField.innerHTML = this.calendar
    }
}

const $calendar = document.querySelector(".calendar")
const $yearField = document.querySelector(".year_field")
const $monthField = document.querySelector(".month_field")
const $datesField = document.querySelector(".dates_field")

$calendar.addEventListener('change', () => {
    const calendar = new Calendar($yearField.value, parseFloat($monthField.options[$monthField.selectedIndex].value) )
    calendar.create($yearField, $datesField)
})