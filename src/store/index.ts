import { AppReducer } from "../reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'

const store = createStore(AppReducer,applyMiddleware(thunk))

export default store;