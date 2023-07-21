import React from "react";

const TodaysWeather = ({ weather, locale }) => {
  const weatherX = weather;

  console.log("weatherX", weatherX);

  return (
    <div style={todaysStyle}>
      <h2>
        {locale.name}, {locale.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
      />
      <div sx={twoColumnStyle}>
        <div>
          <p>{convertUnixToRegular(weather.current.dt)}</p>
          <p>Temp: {Math.round(weather.current.temp)} °F</p>
          {/* <p>
            {weatherDetails[0].main}, {weatherDetails[0].description}.
          </p> */}
        </div>
        <div>
          <p>
            Wind: {weather.current.wind_deg} & {weather.current.wind_speed}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodaysWeather;

function convertUnixToRegular(unixTimestamp) {
  // Convert the timestamp to milliseconds by multiplying by 1000
  const date = new Date(unixTimestamp * 1000);

  // Then you can use methods of the Date object to format the date/time
  const dateString = date.toLocaleString(); // this will give you a string in the format: MM/DD/YYYY, HH:MM:SS AM/PM

  return dateString;
}

const todaysStyle = {
  padding: "10px",
  margin: "10px",
  border: "1px solid #dedede",
  borderRadius: "5px",
};

const twoColumnStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};
