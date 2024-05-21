import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CityWeather = () => {
  const { city } = useParams();
  const [cityWeather, setCityWeather] = useState(null);
  const API_KEY = "b81b8d1dbdfe942876f0a341884b53a2";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
        );
        setCityWeather(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        console.error(error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!cityWeather) return <p>Loading weather data...</p>;

  return (
    <div className="container1 flex justify-center items-center h-screen ">
      <div className="city  m-5 ">
        <h2 className="text-5xl font-bold text-center ">{cityWeather.name}</h2>
        <p className="text-4xl  text-center  m-6">
          {cityWeather.name}, {cityWeather.sys.country}
        </p>
        <div className="main">
          <img
            className="w-40 h-40"
            src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
            alt=""
          />
          <h3 className="h3 flex justify-center items-center">
            <span className="text-4xl  text-center  m-6">
              {cityWeather.weather[0].description}
            </span>
            <span className="text-6xl  text-center  m-6">
              {cityWeather.main.temp} °C
            </span>
          </h3>
        </div>
        <div className=" card ">
          <div className="   text-4xl  text-center  mb-6">
            <h3 className="h3   ">
              <span>Visibility</span> <span>{cityWeather.visibility} km</span>
            </h3>
          </div>
          <div className=" text-4xl  text-center  mb-6">
            <h3 className="h3  ">
              <span> Feels Like</span>
              <span>{cityWeather.main.feels_like} °C</span>
            </h3>
          </div>
          <div className=" text-4xl  text-center  mb-6 ">
            <h3 className="h3  ">
              <span>Speed</span>
              <span> {cityWeather.wind.speed} km / h</span>
            </h3>
          </div>
          <div className="text-4xl  text-center  mb-6 ">
            <h3 className="h3  ">
              <span>Pressure</span>
              <span> {cityWeather.main.pressure} hpa</span>
            </h3>
          </div>
          <div className=" text-4xl  text-center  mb-6 ">
            <h3 className="h3  ">
              <span>Humidity</span>
              <span> {cityWeather.main.humidity} %</span>
            </h3>
          </div>
          <div className="   text-4xl  text-center  mb-6 ">
            <h3 className="h3  ">
              <span>Weather</span>
              <span> {cityWeather.weather[0].main} </span>
            </h3>
          </div>
        </div>

        <Link
          to="/"
          className="btn text-4xl  flex justify-center items-center text-center p-3  m-6"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CityWeather;
