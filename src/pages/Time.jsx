import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentTime = date.toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="time">{time}</div>; // Verwende die CSS-Klasse "time"
};

export default Time;
