import { combineReducers } from "redux";
import userReducer from "./counterSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
