import React from "react";
import FormatDate from "./FormatDate";
import WeatherDisplayIcon from "./WeatherDisplayIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <div className="row">
              <div className="col-6">
                <ul>
                  <li className="citySearch">{props.data.city}</li>
                  <li>
                      <WeatherTemperature celsius={props.data.temperature} />
                  </li>
                  <li>
                      <FormatDate date={props.data.date} />
                  </li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
              </div>
              <div className="col-6">
                <WeatherDisplayIcon code={props.data.icon} />
                
                <p className="text-capitalize">{props.data.description}</p>
              </div>
          </div>
        </div>
    );
}

// <img src={props.data.icon} alt={props.data.description} />