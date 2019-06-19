import axios from "axios";

//declare action type:
// 3 phases of our finite state pattern: START, SUCCESS, ERROR

//create action creator

//dispatch an action object to the reducer

const FETCH_ALERT_START = "FETCH_ALERT_START";
const FETCH_ALERT_SUCCESS = "FETCH_ALERT_SUCCESS";
const FETCH_ALERT_ERROR = "ETCH_ALERT_ERROR";

export const getAlerts = () => dispatch => {
  dispatch({ type: FETCH_ALERT_START });
  axios
    .get("https://api.weather.gov/alerts")
    .then(res => {
      console.log("getAlerts response", res);
      dispatch({ type: FETCH_ALERT_SUCCESS });
    })
    .catch(err => {
      console.log("getAlerts error", error);
      dispatch({ type: FETCH_ALERT_ERROR });
    });
};
