import { createStore, applyMiddleware } from "redux";
import thunk from "redux-logger";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
