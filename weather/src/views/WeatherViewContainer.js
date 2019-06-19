import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import WeatherAlerts from "../components/WeatherAlerts";

class WeatherViewContainer extends Component {
  render() {

    componentDidMount() {
        
    }
    
    return (
      <div className="weather-container">
        <h2>Weather App Incoming</h2>
        <WeatherAlerts />
      </div>
    );
  }
}

export default WeatherViewContainer;
