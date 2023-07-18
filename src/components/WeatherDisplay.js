import React from "react";
import SevenDayForecast from "./SevenDayForecast";
import TodaysWeather from "./TodaysWeather";

const WeatherDisplay = ({ weather, locale }) => {
  return (
    <div className="">
      <TodaysWeather weather={weather} locale={locale} />
      <br />
      <SevenDayForecast weather={weather} />
    </div>
  );
};

export default WeatherDisplay;
