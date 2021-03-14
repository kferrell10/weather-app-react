import React from "react";
import "./WeatherDisplayIcon.css";

import CLEAR_DAY from "./images/CLEAR_DAY.png";
import CLEAR_NIGHT from "./images/CLEAR_NIGHT.png";
import PARTLY_CLOUDY_DAY from "./images/PARTLY_CLOUDY_DAY.png";
import PARTLY_CLOUDY_NIGHT from "./images/PARTLY_CLOUDY_NIGHT.png";
import CLOUDY from "./images/CLOUDY.png";
import RAIN from "./images/RAIN.png";
import THUNDERSTORMS from "./images/THUNDERSTORMS.png";
import SNOW from "./images/SNOW.png";
import FOG from "./images/FOG.png";


export default function WeatherDisplayIcon({ code, alt }) {
 const codeMapping = {
    "01d": CLEAR_DAY,
    "01n": CLEAR_NIGHT,
    "02d": PARTLY_CLOUDY_DAY,
    "02n": PARTLY_CLOUDY_NIGHT,
    "03d": PARTLY_CLOUDY_DAY,
    "03n": PARTLY_CLOUDY_NIGHT,
    "04d": CLOUDY,
    "04n": CLOUDY,
    "09d": RAIN,
    "09n": RAIN,
    "10d": RAIN,
    "10n": RAIN,
    "11d": THUNDERSTORMS,
    "11n": THUNDERSTORMS,
    "13d": SNOW,
    "13n": SNOW,
    "50d": FOG,
    "50n": FOG,
 };
 
    return  <img className="DisplayIcon" src={codeMapping[code]} alt={alt} />;
}