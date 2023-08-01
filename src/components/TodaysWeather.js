import React from "react";

const TodaysWeather = ({ weather, locale }) => {
  return (
    <div style={todaysStyle}>
      <div style={cityStyle}>
        <br />
        <h2>
          {locale.name}, {locale.sys.country}
        </h2>
        <br />
      </div>
      <div style={twoColumnStyle}>
        <div style={tempStyle}>
          <p style={currentTempStyle}>
            {Math.round(weather.current.temp)}
            <span style={degreeStyle}> °F</span>
          </p>
          <div style={minMaxTempStyle}>
            <p style={{ paddingRight: "10px" }}>
              H: {Math.round(weather.daily[0].temp.max)}°
            </p>
            <p>L: {Math.round(weather.daily[0].temp.min)}°</p>
          </div>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
          />
        </div>
      </div>
      <br />

      <div style={tempStyle}>
        <p>
          {weather.current.weather[0].main},{" "}
          {weather.current.weather[0].description}.
        </p>
        <p>{weather.daily[0].summary}</p>
        <p>
          Wind: {weather.current.wind_deg} & {weather.current.wind_speed}
        </p>
      </div>
      <br />
    </div>
  );
};

export default TodaysWeather;

const todaysStyle = {
  padding: "10px",
  margin: "10px",
  border: "1px solid #dedede",
  borderRadius: "5px",
};

const twoColumnStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  width: "100%",
};

const cityStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const tempStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const currentTempStyle = {
  fontSize: "3em",
};

const minMaxTempStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

const degreeStyle = {
  fontSize: "0.5em",
};
