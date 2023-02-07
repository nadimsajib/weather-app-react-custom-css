import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import SearchBox from "./components/search-box/search-box.component";
import WeatherCard from "./components/weather-card/weather-card.component";
import Descriptions from "./components/descriptions/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  //change city
  const [city, setCity] = useState("Paris");
  //change weather
  const [weather, setWeather] = useState(null);
  //change unit
  const [units, setUnits] = useState("metric");
  //change bg
  const [bg, setBg] = useState(hotBg);
  useEffect(() =>{
    const fetchWeatherData = async () => {
      //change city and unit
      const data = await getFormattedWeatherData(city,units);
      setWeather(data);
      // dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };
    fetchWeatherData();
  },[units, city]);
  //click f button
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };
  //
  const enterKeyPressed = (e) => {
    //press enter
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <div className="app" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <SearchBox handleUnitsClick={handleUnitsClick} enterKeyPressed={enterKeyPressed}/>
            <WeatherCard weather={weather} units={units} />
            <Descriptions weather={weather} units={units}/>
          </div>
          )
        }
        
      </div>
    </div>
  );
}

export default App;
