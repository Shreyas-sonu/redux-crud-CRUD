import { combineReducers } from "redux";
import postReducers from "./postReducers";

let rootReducers = combineReducers({ postReducers });

export default rootReducers;
