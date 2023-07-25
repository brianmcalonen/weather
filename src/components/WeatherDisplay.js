import React from "react";
import SevenDayForecast from "./SevenDayForecast";
import TodaysWeather from "./TodaysWeather";
import DailyChart from "./DailyChart";

const WeatherDisplay = ({ weather, locale }) => {
  return (
    <div className="container">
      <div className="column-left">
        <TodaysWeather weather={weather} locale={locale} />
        <DailyChart weather={weather} />
      </div>
      <div className="column-right">
        <SevenDayForecast weather={weather} />
      </div>
    </div>
  );
};

export default WeatherDisplay;
