import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlerts } from "../actions";
//Components
import WeatherAlerts from "../components/WeatherAlerts";

class WeatherViewContainer extends Component {
  componentDidMount() {
    this.props.getAlerts();
  }
  render() {
    return (
      <div className="weather-container">
        <h2>Weather App Incoming</h2>
        {this.props.alerts.map(alert => {
          return <WeatherAlerts alert={alert} key={alert.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    alerts: state.alerts,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getAlerts }
)(WeatherViewContainer);
