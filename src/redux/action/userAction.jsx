import { loginApi } from "../../service/UserServices";

export const USER_LOGIN = "USER_LOGIN";

export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const USER_LOGOUT = "USER_LOGOUT";

export const handleLoginRedux = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_LOGIN });

    try {
      let res = await loginApi(email.trim(), password);
      if (res && res.token) {
        dispatch({
          type: FETCH_USER_SUCCESS,
          data: { email, token: res.token },
        });
      } else {
        if (res && res.status === 400) {
          alert(res.data.error);
        } else {
          alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        }
        dispatch({ type: FETCH_USER_ERROR });
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
  };
};
