import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
// reducer: rootReducer,
