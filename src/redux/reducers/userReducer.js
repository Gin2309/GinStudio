import {
  USER_LOGIN,
  USER_LOGOUT,
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_SUCCESS,
} from "../action/userAction";

const INITIAL_STATE = {
  acc: { email: "", auth: false, token: "" },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        count: state.count + 1,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        count: state.count - 1,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default userReducer;
