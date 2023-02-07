import React from 'react'

const WeatherCard = ({weather, units}) => {
  return (
    <div>
        <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weaterIcon"/>
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units === 'metric'? 'C': 'F' }`}</h1>
            </div>
        </div>
    </div>
  )
}
export default WeatherCard