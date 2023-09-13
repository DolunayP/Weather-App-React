import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/weather cards/WeatherCard'
import Loading from './components/Loading'
import WeatherCardLeft from './components/weather cards/WeatherCardLeft'
import { getWeather } from './redux/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'


function App() {
  const [searchedWord, setSearchedWord] = useState('')
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const { weather, weatherStatus } = useSelector(state => state.weather);
  console.log(weatherStatus)
  useEffect(() => {
    dispatch(getWeather(searchedWord))
  }, [dispatch]);

  const handleSearch = (e) => {
    const word = e.target.value;
    setSearchedWord(word);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(searchedWord);
    dispatch(getWeather(searchedWord));
    setSearchedWord('')
  }

  return (
    <>
      <Header searchedWord={searchedWord} handleSearch={handleSearch} handleSubmit={handleSubmit} />

      {weatherStatus == "SUCCESS" ? (
        <div className='weather-container'>
          <div className='weather-left'>
            <WeatherCardLeft weather={weather} />
          </div>
          <div className='weather-right'>
            <h2>Weekly Forecast</h2>
            {weather.forecast.forecastday.map((day, i) => {

              if (i > 0) {
                return < WeatherCard day={day} key={i} />
              }
            })}
          </div>
        </div>

      ) : weatherStatus == "LOADING" ? <Loading /> : <div className='info-text'>Pleae type at least 3 letter of the city name which you want to check.</div>}


    </>

  )
}




export default App
