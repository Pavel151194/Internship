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
        this.weather = await this.getData(this.weatherURL)

        return this
    }

    async getForecast() {
        this.forecast = await this.getData(this.forecastURL)

        return this
    }

    async getData(url) {
        return await fetch(url)
        .then(res => res.json())
        .catch(err => err)
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

    getWeatherDate() {
        return this.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    }
    
    showForecast(parent) {
        // 9 17 25 step 8
        const mass = [9, 17, 25]
        let result = `<section class="weather_widget"><button class="close_widget">X</button><p>${this.forecast.city.name}</p>`
        mass.map(i => result += `
            <p>прогноз на ${this.forecast.list[i].dt_txt}</p>
            <p>температура воздуха: ${parseInt(this.forecast.list[i].main.temp - 273.15)} °C</p>
            <img class="widget_icon" src="http://openweathermap.org/img/wn/${this.forecast.list[i].weather[0].icon}@2x.png" alt="icon">
            <p>${this.forecast.list[i].weather[0].description}</p>
            <p>ветер ${this.forecast.list[i].wind.speed} м/с</p>
            <p class="weather_humidity">влажность ${this.forecast.list[i].main.humidity}%</p>
        `)
        result += `</section>`
        parent.innerHTML += result
    }

    close(widget) {
        widget.outerHTML = ''
    }
}