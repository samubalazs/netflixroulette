import {createStore, combineReducers, applyMiddleware} from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";

import movies from "../reducers/movieReducer";

export default createStore(
	combineReducers({
		movies
	}),
	{},
	applyMiddleware(createLogger(), thunk)
);