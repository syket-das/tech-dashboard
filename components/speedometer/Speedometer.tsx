import React, { useState, useEffect } from 'react';
import './Speedometer.css'; // Style file for the component

const Speedometer = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101); // Increment progress, loop at 100
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="speedometer-container">
      <div
        className="speedometer-progress"
        style={{ transform: `rotate(${90 + progress * 1.8}deg)` }}
      ></div>
    </div>
  );
};

export default Speedometer;
