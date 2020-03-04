import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(promiseMiddleware, ...middleware))
);
export default store;
