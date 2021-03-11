import React from "react";
import FormatDate from "./FormatDate";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <div className="row">
              <div className="col-6">
                <ul>
                  <li>The weather in {props.data.city} is:</li>
                  <li className="Temperature">{Math.round(props.data.temperature)}<span className="Unit">˚C</span><span className="Light">/</span><span className="Unit">˚F</span></li>
                  <li>
                      <FormatDate date={props.data.date} />
                  </li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
              </div>
              <div className="col-6">
                <img src={props.data.icon} alt={props.data.description} />
                <p className="text-capitalize">{props.data.description}</p>
              </div>
          </div>
          <div>
            <WeatherForecast />
          </div>
        </div>
    );
}

