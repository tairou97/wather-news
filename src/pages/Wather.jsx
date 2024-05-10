import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

const Wather = () => {
  const [wather, setWather] = useState("");
  const [search, setSearch] = useState(null);
  const API_KEY = process.env.API_KEY;
  console.log(API_KEY);

  const fetchData = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=${API_KEY}`;
    console.log(URL);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setWather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onClick={handleInputChange} />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Wather;
