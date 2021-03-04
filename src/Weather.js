import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`);
    }
    let apiKey = "f3711ec096b8e2b5d745c777afc03d71";
    let units = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return (<Loader type="Bars" color="#404040" height={50} width={50} />)
    
}