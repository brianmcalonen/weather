import React from "react";
import "./App.css";
import WeatherData from "./components/WeatherData";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <h5 className="container-fluid">Weather App</h5>
      </nav>
      <br />
      <WeatherData />
    </div>
  );
}

export default App;
