import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: userSlice,
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
// reducer: rootReducer,
