import React from "react";
import SevenDayForecast from "./SevenDayForecast";
import TodaysWeather from "./TodaysWeather";
import DailyChart from "./DailyChart";

const WeatherDisplay = ({ weather, locale }) => {
  return (
    <div className="">
      <TodaysWeather weather={weather} locale={locale} />
      <DailyChart weather={weather} />
      <br />
      <SevenDayForecast weather={weather} />
    </div>
  );
};

export default WeatherDisplay;
