import { $widgets } from "./DOMs.js"
import { WeatherWidget } from "./Weather.js"

const weatherWidget = await new WeatherWidget('Minsk', 'ru').getWeather()

weatherWidget.showWeather($widgets)

document.addEventListener('click', async event => {
    const $closeWidgetButton = event.target.classList.contains('close_widget')
    const $showMoreWeather = event.target.classList.contains('show_more_weather')

    if ($closeWidgetButton) {
        const $weatherWidget = event.target.closest('.weather_widget')
        weatherWidget.close($weatherWidget)
    }

    if ($showMoreWeather) {
        const forecast = await weatherWidget.getMoreWeather()
        weatherWidget.showForecast($widgets)
        console.log(forecast.forecast)
    }

})

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let date = new Date().getDate()
let str = `${year}-${month}-${date}`

console.log(str)
//"2021-11-25 15:00:00"