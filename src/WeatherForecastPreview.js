import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
    
    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}˚C`;
    }

    function icon() {
        let icon = props.data.weather[0].icon
        return `${icon}`;
    }
    
    return (
        <div className="WeatherForecast col">
            {hours()}
            {icon()}
            {temperature()}
        </div>
    );
}

// {props.data.weather[0].icon}

//<WeatherIcon code={forecast.list[0].weather[0].icon} />