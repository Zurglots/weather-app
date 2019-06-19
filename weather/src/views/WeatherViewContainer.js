import React, { Component } from "react";
import { connect } from "react-redux";
import {getAlerts} from "../actions"
//Components
import WeatherAlerts from "../components/WeatherAlerts";

class WeatherViewContainer extends Component {
  render() {
    componentDidMount() {
console.log('cdm loaded');
this.props.getAlerts();
    };

    return (
      <div className="weather-container">
        <h2>Weather App Incoming</h2>
        <WeatherAlerts />
      </div>
    );
  }
}


export default connect(
    null,
   {getAlerts} 
)(WeatherAlerts)

export default WeatherViewContainer;
