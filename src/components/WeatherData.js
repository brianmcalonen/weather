import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./SearchBar";
import { Spinner } from "react-bootstrap";

const WeatherData = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [weather, setWeather] = useState(null);
  const [locale, setLocale] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude={part}&appid=${API_KEY}&units=imperial`;

    setLoading(true); // Set loading to true when fetch begins
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false); // Set loading to false when fetch completes
  };

  const fetchLocale = async () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`;

    setLoading(true);
    try {
      const response = await axios.get(url);
      setLocale(response.data);
    } catch (error) {
      console.error("Error fetching locale data:", error);
    }
    setLoading(false);
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
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : weather && locale ? (
        <div>
          <SearchBar setLocation={setLocation} />
          <WeatherDisplay weather={weather} locale={locale} />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherData;
