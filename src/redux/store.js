import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: userReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
// reducer: rootReducer,
