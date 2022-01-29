import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { queryReducer } from "./reducers/query";

export const store = createStore(queryReducer, applyMiddleware(thunk));