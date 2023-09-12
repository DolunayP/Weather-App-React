import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/weather cards/WeatherCard'
import Loading from './components/Loading'
import WeatherCardLeft from './components/weather cards/WeatherCardLeft'

function App() {
  const [searchedWord, setSearchedWord] = useState('')
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const data = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location}&days=7&aqi=yes&alerts=yes`)
        setWeatherData(res.data)
        console.log(res.data, "res data")
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    if (location) {
      data();
    }

  }, [location])

  const handleSearch = (e) => {
    const word = e.target.value;
    setSearchedWord(word);
  }


  return (
    <>
      <h1 className='title'>Weather Forecast APP</h1>
      <div className='input-container'>
        <form onSubmit={(e) => { e.preventDefault(); setLocation(searchedWord); setSearchedWord('') }}>
          <input type="text" className='location-input' placeholder='Type City Name...' value={searchedWord} onChange={handleSearch} />
        </form>
      </div>

      {weatherData ? (
        <div className='weather-container'>

          <div className='weather-left'>
            <WeatherCardLeft weatherData={weatherData} />
          </div>
          <div className='weather-right'>
            <h2>Weekly Forecast</h2>
            {weatherData.forecast.forecastday.map((day, i) => {

              if (i > 0) {
                return < WeatherCard day={day} key={i} />
              }
            })}
          </div>
        </div>

      ) : (<div className='info-text'> Please type at least 3 letters of city name which you want to check... </div>)}


    </>

  )
}




export default App
