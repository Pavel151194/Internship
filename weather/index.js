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
        const forecast = await weatherWidget.getForecast()
        weatherWidget.showForecast($widgets)

    }
})

document.addEventListener('load', async event => {
    console.log("load")
})