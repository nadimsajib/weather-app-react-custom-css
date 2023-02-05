import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import SearchBox from "./components/search-box/search-box.component";
import WeatherCard from "./components/weather-card/weather-card.component";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${coldBg})`}}>
      <div className="overlay">
        <div className="container">
          <SearchBox/>
          <WeatherCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
