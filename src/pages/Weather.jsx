import { useEffect, useState } from 'react'

const weatherCodes = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Fog deposits',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  95: 'Thunderstorm',
}

function Weather() {
  const [city, setCity] = useState('Kolkata')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchWeather(searchCity) {
    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          searchCity,
        )}&count=1`,
      )
      const geoData = await geoResponse.json()

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found')
      }

      const { latitude, longitude, name, country } = geoData.results[0]
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
      )
      const weatherData = await weatherResponse.json()

      setWeather({
        name: `${name}, ${country}`,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weatherCode: weatherData.current_weather.weathercode,
        time: weatherData.current_weather.time,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadInitialWeather = async () => {
      await fetchWeather(city)
    }

    void loadInitialWeather()
  }, [city])

  return (
    <section className="page weather-page">
      <h1 className="section-title">Weather App</h1>
      <form
        className="weather-form"
        onSubmit={(event) => {
          event.preventDefault()
          fetchWeather(city)
        }}
      >
        <label htmlFor="city">City</label>
        <div className="weather-input-row">
          <input
            id="city"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name"
          />
          <button className="primary-button" type="submit">
            Check Weather
          </button>
        </div>
      </form>

      {loading && <p>Fetching weather details…</p>}
      {error && <p className="error-message">{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weatherCodes[weather.weatherCode] || 'Weather details available'}</p>
          <div className="weather-values">
            <span>Temperature: {weather.temperature}°C</span>
            <span>Wind speed: {weather.windspeed} km/h</span>
            <span>Updated: {weather.time}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Weather
