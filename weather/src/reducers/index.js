import {
  FETCH_ALERT_START,
  FETCH_ALERT_SUCCESS,
  FETCH_ALERT_ERROR
} from "../actions";

const initalState = {
  alerts: [],
  fetching: false,
  error: null
};

// export default is unnamed export
// const is named export

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_ALERT_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_ALERT_SUCCESS:
      console.log("fetch alert success", action.payload);
      return {
        ...state,
        fetching: false,
        error: null,
        alerts: action.payload
      };
    case FETCH_ALERT_ERROR:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
