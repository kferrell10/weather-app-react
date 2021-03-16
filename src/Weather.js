import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";

import "./index.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      ready: true,
      
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  // https://api.openweathermap.org/data/2.5/weather?q=London&appid=f3711ec096b8e2b5d745c777afc03d71&units=Metric 

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f3711ec096b8e2b5d745c777afc03d71";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-9">
                <input
                  type="search"
                  placeholder="Type a city name..."
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
              <div className="col-sm-3">
                <input type="submit" value="Search" className="btn btn-info w-100" />
              </div>
            </div>
          </form>           
          <WeatherInfo data={weather} />
          <WeatherForecast city={weather.city} />
          <p className="Mousetype"><a href="https://github.com/kferrell10/weather-app-react" target="_blank" rel="noreferrer">Open-source code on github</a> by <a href="https://kimferrelldesign.com/" target="_blank" rel="noreferrer">Kim Ferrell</a></p>
      </div> // closes weather div
    );
  } else {
    search();
    return "loading...";
  }
}