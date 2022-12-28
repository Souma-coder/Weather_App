import "./App.css";
import React from "react";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";

export const ThemeContext = React.createContext();

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState(false);
  console.log(theme);

  const body = document.querySelector("body");

  body.style.backgroundColor = theme ? "#333" : "#d5d4d4";

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Search onSearchChange={handleOnSearchChange} />
                {currentWeather && <CurrentWeather data={currentWeather} />}
                {forecast && <Forecast data={forecast} />}
              </div>
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
