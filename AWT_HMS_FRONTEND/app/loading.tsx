"use client"
import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 10) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-page">
      <div
        className="loading-spinner"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <p className="loading-text">    Loading...</p>
    </div>
  );
};

export default Loading;