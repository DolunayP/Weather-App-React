import React from 'react'
import { CiTempHigh } from 'react-icons/ci'
import { BsWind } from 'react-icons/bs'
import { GiWaterDrop } from 'react-icons/gi'
import { AiOutlineCalendar } from 'react-icons/ai'
const WeatherCard = ({ day }) => {

    return (
        <div className='weather-card'>
            <div className='date'>
                <div> <AiOutlineCalendar />{day.date}</div>
                <div className='icon'>
                    <img src={day.day.condition.icon} alt="" /> </div>
            </div>
            <div className='temperature'>
                <div><CiTempHigh /> {day.day.avgtemp_c} &deg;C</div>
                <div className='condition'>
                    {day.day.condition.text}</div>
            </div>
            <div className='clo-hum'>
                <div><GiWaterDrop />{day.day.avghumidity}%</div>
                <div><BsWind /> {(day.day.maxwind_mph * 0.44).toFixed(1)} m/s</div>
            </div>
        </div>
    )
}

export default WeatherCard