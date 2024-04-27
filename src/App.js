import React, { useState } from "react";
import axios from "axios";


function App() {
  const API_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  console.log(API_key);

  const searchLocaion = (event) => {
    event.preventDefault();
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      setLocation('');
    })
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setLocation(value);
  };


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;
  return (
    <div className="app">
    <form onSubmit={searchLocaion}>
      <input
       type="text" 
       value={location} 
       onChange={handleChange}
       placeholder="Enter Location"
      />
    </form>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{ (data.main.temp - 273.15).toFixed(2) }℃</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{ data.weather[0].description }</p> : null}
          </div>
        </div>
        <div className="buttom">
          <div className="feels">
            {data.main ? <p className="bold">{ (data.main.feels_like - 273.15).toFixed(2) }℃</p> : null }
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{ data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null }
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
