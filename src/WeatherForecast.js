import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
        
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="row">
                <WeatherForecastPreview data={forecast.list[0]} />
            </div>
        );
    } else {
        let apiKey = "f3711ec096b8e2b5d745c777afc03d71";
        let url =  `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return null;  
    } 
}