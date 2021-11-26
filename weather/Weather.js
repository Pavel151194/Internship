export class WeatherWidget  {
    constructor(city, language) {
        this.key = '8ad95b57e3afb0bcb293751d2e2a7a86'
        this.city = city
        this.language = language
        this.domain ='https://api.openweathermap.org/data/2.5'
        this.settings = `q=${this.city}&appid=${this.key}&lang=${this.language}`
        this.weatherURL = `${this.domain}/weather?${this.settings}`
        this.forecastURL = `${this.domain}/forecast?${this.settings}`
    }
    
    async getWeather() {
        this.weather = await fetch(this.weatherURL)
        .then(res => res.json())
        .catch(err => err)

        return this
    }

    async getForecast(parent) {
        this.showLoader(parent)
 
        this.forecast = await fetch(this.forecastURL)
        .then(res => {
            this.close(document.querySelector('.loader'))
            return res.json()  
        })
        .catch(err => err)
        
        return this
    }

    showWeather(parent) {
        parent.innerHTML += `
            <section class="weather_widget">
                <button class="show_more_weather">Погода на 3 дня</button>
                <button class="close_widget">X</button>
                <p>${this.weather.name}</p>
                <p>прогноз на сейчас</p>
                <p>температура воздуха: ${parseInt(this.weather.main.temp - 273.15)} °C</p>
                <img class="widget_icon" src="http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png" alt="icon">
                <p>${this.weather.weather[0].description}</p>
                <p>ветер ${this.weather.wind.speed} м/с</p>
                <p>влажность ${this.weather.main.humidity}%</p>
            </section>
        `
    }

    filterForecast(num) {
        // const days = [...Array(num).keys()].map(i => Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i, 12)/1000)
        
        // return days.map(day => this.forecast.list.filter(item => item.dt === day)[0])

        return [0, 7, 15].map(i => this.forecast.list[i])
    }

    showForecast(parent) {
        this.forecasts = this.filterForecast(3)

        let result = `<section class="weather_widget"><button class="close_widget">X</button><p>${this.forecast.city.name}</p>`

        this.forecasts.map(forecast => result += `
            <p>прогноз на ${forecast.dt_txt}</p>
            <p>температура воздуха: ${parseInt(forecast.main.temp - 273.15)} °C</p>
            <img class="widget_icon" src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="icon">
            <p>${forecast.weather[0].description}</p>
            <p>ветер ${forecast.wind.speed} м/с</p>
            <p class="weather_humidity">влажность ${forecast.main.humidity}%</p>
        `)

        result += `</section>`
        parent.innerHTML += result
    }

    showLoader(parent) {
        parent.innerHTML += `<img class='loader' src="./assets/loader.gif"></img>`
    }

    close(element) {
        element.outerHTML = ''
    }
}