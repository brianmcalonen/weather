import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const WeatherData = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [weather, setWeather] = useState(null);
  const [locale, setLocale] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude={part}&appid=${API_KEY}&units=imperial`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchLocale = async () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setLocale(response.data);
    } catch (error) {
      console.error("Error fetching locale data:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => setLocation({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      setLocation({ error: "Geolocation is not supported by this browser." });
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchLocale();
      fetchWeather();
    }
  }, [location]);

  return (
    <div>{weather && <WeatherDisplay weather={weather} locale={locale} />}</div>
  );
};

export default WeatherData;
