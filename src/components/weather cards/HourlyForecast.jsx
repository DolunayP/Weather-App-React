import React from 'react'

const HourlyForecast = ({ day }) => {
    return (
        <div className='hourly-card'>
            <div>{(day.time).slice(11, 16)}</div>
            <div><img src={day.condition.icon} alt="" /></div>
            <div>{day.temp_c} &deg;C</div>
        </div>
    )
}

export default HourlyForecast