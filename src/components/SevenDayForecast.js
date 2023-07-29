import React from "react";

const SevenDayForecast = ({ weather }) => {
  const { daily } = weather;

  // console.log("daily", daily);

  return (
    <div>
      <br />
      <h5 style={{ textAlign: "left" }}>Seven day forecast</h5>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {daily.map((day, index) => {
          // Skip the first element
          if (index === 0) {
            return null;
          }

          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "10px",
                padding: "10px 30px",
                border: "1px solid #dedede",
                borderRadius: "5px",
              }}
            >
              <p>{convertUnixToRegular(day.dt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              />
              <p>{Math.round(day.temp.day)} °F</p>
              <p>{day.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;

const convertUnixToRegular = (unixTimestamp) => {
  // Convert the timestamp to milliseconds by multiplying by 1000
  const date = new Date(unixTimestamp * 1000);

  // We'll use the toLocaleDateString method with an options object to get the day of the week
  const options = { weekday: "short" };
  const dayOfWeek = date.toLocaleDateString(undefined, options);

  return dayOfWeek;
};
