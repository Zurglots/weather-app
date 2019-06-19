import { createStore, applyMiddleware } from "redux";
import thunk from "redux-logger";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
