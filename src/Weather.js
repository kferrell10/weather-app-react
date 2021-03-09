import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

import "./index.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
 // let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f3711ec096b8e2b5d745c777afc03d71";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  // https://api.openweathermap.org/data/2.5/weather?q=London&appid=f3711ec096b8e2b5d745c777afc03d71&units=Metric

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
            type="search"
            placeholder="type a city name"
            autoFocus="on"
            onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
       </div>
    </form>
  );

  if (weather.ready) {
    return (
      <div className="row">
        <div className="col-12">
          {form}
            <div className="row">
              <div className="col-6">
                <p>The weather in {weather.city} is:</p>
                <h1> {Math.round(weather.temperature)}<span className="Unit">˚C</span><span className="Light">|</span><span className="Unit">˚F</span></h1>
                <p><FormatDate date={weatherData.date} /></p>
              </div>
              <div className="col-6">
                <img src={weather.icon} alt={weather.description} />
                <p>{weather.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">  
                <ul className="weatherReport">
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind}km/h</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-12">
          {form}
            <div className="row">
              <div className="col-6">
                <p>The weather in {props.defaultCity} is:</p>
                <h1> {Math.round(weather.temperature)}<span className="Unit">˚C</span><span className="Light">|</span><span className="Unit">˚F</span></h1>
                <p>{" "}</p>
              </div>
              <div className="col-6">
                <img src={weather.icon} alt={weather.description} />
                <p className="text-capitalize">{weather.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">  
                <ul className="weatherReport">
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind}km/h</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    )
  }
}