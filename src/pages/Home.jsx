import React, { useState, useEffect } from "react";
import More from "./More";
import axios from "axios";
import Time from "./Time";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "b81b8d1dbdfe942876f0a341884b53a2";

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const berlinWeather = await fetchWeather("Berlin");
      const parisWeather = await fetchWeather("Paris");
      const santoriniWeather = await fetchWeather("Santorini");
      const cubaWeather = await fetchWeather("Cuba");
      const newYorkWeather = await fetchWeather("New York");
      const romeWeather = await fetchWeather("Rom");
      const accraWeather = await fetchWeather("Accra");
      const malagaWeather = await fetchWeather("Malaga");
      const londonWeather = await fetchWeather("London");
      const amsterdamWeather = await fetchWeather("Amsterdam");
      const rotterdamWeather = await fetchWeather("Rotterdam");
      const rhodesWeather = await fetchWeather("Rhodes");

      setWeather([
        berlinWeather,
        parisWeather,
        santoriniWeather,
        newYorkWeather,
        romeWeather,
        accraWeather,
        malagaWeather,
        londonWeather,
        amsterdamWeather,
        rotterdamWeather,
        rhodesWeather,
        cubaWeather,
      ]);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityWeather = await fetchWeather(search);
    if (cityWeather) {
      setWeather([cityWeather, ...weather]);
      setSearch(""); // Eingabefeld leeren
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className=" home-form flex justify-evenly items-center">
        {" "}
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            className="bg-gray-300 p-2 m-3 rounded-lg"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter city name"
          />
          <button type="submit" className="btn p-2 m-3 ">
            Search Weather
          </button>
        </form>
        <Time />
      </div>

      <div className=" citys ">
        {weather ? (
          weather.map((cityWeather, index) => (
            <div key={index} className="city">
              <div className="cityname">
                <h2>{cityWeather.name}</h2>
                <p>
                  {cityWeather.name}, {cityWeather.sys.country}
                </p>
              </div>

              <div className="main">
                <img
                  src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
                  alt=""
                />
                <h3 className="h3">
                  <span>{cityWeather.weather[0].description}</span>
                  <span>{cityWeather.main.temp} °C</span>
                </h3>
              </div>
              <div>
                <h3 className="h3">
                  Feels Like {cityWeather.main.feels_like} °C
                </h3>
                <h3 className="h3">Temperature: 25 °C</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Weather data...</p>
        )}
      </div>

      <div className="preset-weather-info">
        <h2>Preset Weather Info</h2>
        <p>Temperature: 25 °C</p>
        <p>Condition: Sunny</p>
      </div>

      <More />
    </div>
  );
};

export default Home;
