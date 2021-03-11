import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }
   
    if (unit === "celsius") {
    return (
            <div>
                <span className="Temperature">{Math.round(props.celsius)}</span>
                <span className="Unit">˚C</span>
                <span className="Light">/</span>
                <span className="Unit"><a href="/" onClick={convertToFahrenheit}>˚F</a></span>
            </div>
        );
    } else {
        return (
            <div>
                <span className="Temperature">{Math.round(fahrenheit())}</span>
                <span className="Unit"><a href="/" onClick={convertToCelsius}>˚C</a></span>
                <span className="Light">/</span>
                <span className="Unit">˚F</span>
            </div>
        );
    }
}