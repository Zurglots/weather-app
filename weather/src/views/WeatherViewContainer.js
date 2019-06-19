import React from "react";
import { connect } from "react-redux";

//Components
import WeatherAlerts from "../components/WeatherAlerts";

const WeatherViewContainer = () => {
  return (
    <div className="weather-container">
      <h2>Weather App Incoming</h2>
      <WeatherAlerts />
    </div>
  );
};

export default WeatherViewContainer;
