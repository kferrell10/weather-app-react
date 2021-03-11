import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
return (
    // https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=f3711ec096b8e2b5d745c777afc03d71&units=metric  lat={lat}&lon={lon}&exclude={part}&appid=
    <div className="WeatherForecast">
        <div className="row">   
            <div className="col-12">  
                10:00
            </div>
        </div>
    </div>
    );
}