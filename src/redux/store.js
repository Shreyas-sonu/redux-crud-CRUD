import { createStore,applyMiddleware } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

//! if action want to return function we must and should use Redux-thunk Middle Ware
import thunk from "redux-thunk"

let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
