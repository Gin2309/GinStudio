import {
  USER_LOGIN,
  USER_LOGOUT,
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_SUCCESS,
} from "../action/userAction";

const INITIAL_STATE = {
  account: { email: "", auth: false, token: "" },
  isLoading: false,
  isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        account: {
          auth: false,
        },
        isLoading: false,
        isError: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        account: {
          email: action.data.email,
          token: action.data.token,
          auth: true,
        },
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default userReducer;
