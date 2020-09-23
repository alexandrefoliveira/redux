import counterReducers from "./counter";
import loggedReducers from "./isLogged";
import {
    combineReducers
} from "redux";
import counterReducer from "./counter";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducers
});

export default allReducers;