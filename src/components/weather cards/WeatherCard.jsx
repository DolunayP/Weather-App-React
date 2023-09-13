import React from 'react'
import { CiTempHigh } from 'react-icons/ci'
import { BsWind } from 'react-icons/bs'
import { GiWaterDrop } from 'react-icons/gi'
import { AiOutlineCalendar } from 'react-icons/ai'
const WeatherCard = ({ day }) => {
    return (
        <div className='weather-card'>
            <div className='date'>
                <div className='small-ico'> <AiOutlineCalendar />{day.date}</div>
                <div className='icon'>
                    <img src={day.day.condition.icon} alt="" /> </div>
            </div>
            <div>
                <div className='small-ico'><CiTempHigh />{day.day.avgtemp_c} &deg;C</div>
                <div>
                    {day.day.condition.text}</div>
            </div>
            <div>
                <div className='small-ico'><GiWaterDrop /> {day.day.avghumidity}%</div>
                <div className='small-ico'><BsWind /> {(day.day.maxwind_mph * 0.44).toFixed(1)} m/s</div>
            </div>
        </div>
    )
}

export default WeatherCard