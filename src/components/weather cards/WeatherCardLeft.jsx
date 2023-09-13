import React from 'react'
import HourlyForecast from './HourlyForecast'
import { FaTemperatureFull } from 'react-icons/fa6'
import { BsWind, BsClouds } from 'react-icons/bs'
import { GiWaterDrop } from 'react-icons/gi'
const WeatherCardLeft = ({ weather }) => {

    const weathera = [weather.forecast.forecastday[0]]
    return (
        <div className='weather-left-card'>
            <h2>Current Weather</h2>
            <div className='current-weather'>
                <div className='location'>
                    {weather.location.name}, {weather.location.country}
                    <div className='date'>
                        {weathera[0].date}
                    </div>
                </div>
                <div>
                    <div> {weathera[0].day.avgtemp_c} &deg;C (Avg.)</div>
                    {weathera[0].day.condition.text}
                </div>
                <div className='icon'>
                    <img src={weathera[0].day.condition.icon} alt="" />
                </div>

            </div>
            <h2>Air Conditions</h2>
            <div className='air-conditions'>
                <div>
                    <h3> <FaTemperatureFull /> Real Feel</h3>
                    <p>{weathera[0].hour[0].feelslike_c} &deg;C</p>
                </div>
                <div>
                    <h3><BsWind /> Wind</h3>
                    <p>{(weathera[0].day.maxwind_mph * 0.44).toFixed(1)} m/s</p>
                </div>
                <div>
                    <h3><BsClouds /> Clouds</h3>
                    <p>{weather.current.cloud}%</p>
                </div>
                <div>
                    <h3><GiWaterDrop />Humidity</h3>
                    <p>{weathera[0].day.avghumidity}%</p>
                </div>
            </div>
            <h2>Today's Forecast</h2>

            <div className='hourly-forecast'>
                {weathera[0].hour.map((day, i) => {
                    if (i === 0 | i === 5 | i === 10 | i === 15 | i === 20 | i === 23) {
                        return (< HourlyForecast day={day} key={i} />)
                    }
                })}
            </div>
        </div >

    )
}

export default WeatherCardLeft