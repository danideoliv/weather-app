import { useState } from 'react'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useWeather } from './hooks/useWeather';
import './css/App.css';

export default function App() {
  const [city, setCity] = useState("");
  const { current, forecast, loading, error } = useWeather(city);

  const daily = forecast && forecast.list.filter(entry => { return entry.dt_txt.includes("12:00:00")});
  const forecastList = forecast && forecast.list;
  
  return (
    <>
      <Header />
      <div className="main">
        <SearchBar onSearch={setCity} />
        <div className="weather-container">
          {loading ? (<p className="message">Loading...</p>) : (<CurrentWeather data={current} />)}
          <div className="forecast-list">
            {
              daily && daily.map(entry => (
                loading ? (<p className="message">Loading...</p>) : (<Forecast key={entry.dt} data={entry} wholeData={forecastList} />)
              ))
            }
          </div>
          {error && <p className="message">Error: {error}</p>}
        </div>
      </div>
    </>
  );
}
