import React, { useState, useEffect } from "react";
import "./Time.css";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="Time">
      <div id="time">
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <p>Take charge of your time and lets work together</p>
    </div>
  );
};

export default Time;
