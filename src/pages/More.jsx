import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const More = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "b81b8d1dbdfe942876f0a341884b53a2";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${API_KEY}`;
  console.log(URL);
  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setWeather(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div className="p-5 more ">hallo</div>;
};

export default More;
