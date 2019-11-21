import { combineReducers } from "redux";
import AboutUsReducer from "./about-us-reducer"

const reducers = {
    aboutUsStore: AboutUsReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
