import React from "react";

const SevenDayForecast = ({ weather }) => {
  const { daily } = weather;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
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
              margin: "10px",
              padding: "10px",
              border: "1px solid #FFF",
              borderRadius: "5px",
            }}
          >
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
            <p>Date: {convertUnixToRegular(day.dt)}</p>
            <p>Temperature: {day.temp.day}</p>
            <p>Weather: {day.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SevenDayForecast;

function convertUnixToRegular(unixTimestamp) {
  // Convert the timestamp to milliseconds by multiplying by 1000
  const date = new Date(unixTimestamp * 1000);

  // Then you can use methods of the Date object to format the date/time
  const dateString = date.toLocaleString(); // this will give you a string in the format: MM/DD/YYYY, HH:MM:SS AM/PM

  // Split the dateString by the comma and take the first part
  const dateOnlyString = dateString.split(",")[0];

  return dateOnlyString;
}
