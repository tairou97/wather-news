import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Time from "../pages/Time";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const API_KEY = "b81b8d1dbdfe942876f0a341884b53a2";

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cities = [
          "Berlin",
          "Paris",
          "Santorini",
          "Cuba",
          "New York",
          "Rom",
          "Accra",
          "Malaga",
          "London",
          "Amsterdam",
          "Rotterdam",
          "Rhodes",
        ];

        const weatherData = await Promise.all(
          cities.map(async (city) => {
            return await fetchWeather(city);
          })
        );

        setWeather(weatherData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather/${search}`);
    setSearch("");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredWeather = search
    ? weather.filter((cityWeather) =>
        cityWeather.name.toLowerCase().includes(search.toLowerCase())
      )
    : weather;

  return (
    <div className="home min-h-screen">
      <div className="home-form flex justify-evenly items-center">
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            className="bg-gray-300 p-2 m-3 rounded-lg"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter city name"
          />
          <button type="submit" className="btn p-2 m-3">
            Search Weather
          </button>
        </form>
        <Time />
      </div>

      <div className="citys">
        {filteredWeather.length > 0 ? (
          filteredWeather.map((cityWeather, index) => (
            <Link
              to={`/weather/${cityWeather.name}`}
              key={index}
              className="city"
            >
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
            </Link>
          ))
        ) : (
          <p>Loading Weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
