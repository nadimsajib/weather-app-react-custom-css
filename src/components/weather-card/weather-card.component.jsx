import React from 'react'

function WeatherCard() {
  return (
    <div>
        <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weaterIcon"/>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34°C</h1>
            </div>
        </div>
    </div>
  )
}
export default WeatherCard