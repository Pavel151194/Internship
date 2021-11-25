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

    async getMoreWeather() {
        this.forecast = await fetch(this.forecastURL)
        .then(res => res.json())
        .catch(err => err)

        return this
    }

    showWeather(parent) {
        parent.innerHTML += `
            <section class="weather_widget">
                <div class="widget_buttons">
                    <button class="show_more_weather">Показать погоду на 3 дня</button>
                    <button class="close_widget">X</button>
                </div>
                <p>Сейчас в ${this.weather.name} ${parseInt(this.weather.main.temp - 273.15)} °C</p>
                <img class="widget_icon" src="http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png" alt="icon">
                <p>${this.weather.weather[0].description}</p>
                <p>ветер ${this.weather.wind.speed} м/с</p>
            </section>
        `
    }
    getWeatherDate() {

    }
    
    showForecast(parent) {
        parent.innerHTML += `
            <section class="weather_widget">
                <button class="close_widget">X</button>
                <p>${this.forecast.list[0].dt_txt} ${this.forecast.city.name} ${parseInt(this.forecast.list[0].main.temp - 273.15)} °C</p>
                <img class="widget_icon" src="http://openweathermap.org/img/wn/${this.forecast.list[0].weather[0].icon}@2x.png" alt="icon">
                <p>${this.forecast.list[0].weather[0].description}</p>
                <p>ветер ${this.forecast.list[0].wind.speed} м/с</p>
            </section>
        `
    }

    close(widget) {
        widget.classList.add('hidden')
    }
}