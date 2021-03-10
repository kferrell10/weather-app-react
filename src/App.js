import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="London" />
        <p className="Mousetype"><a href="https://github.com/kferrell10/weather-app-react" target="_blank" rel="noreferrer">Open-source code on github</a> by <a href="https://kimferrelldesign.com/" target="_blank" rel="noreferrer">Kim Ferrell</a></p>
      </div>
    </div>
  );
}


