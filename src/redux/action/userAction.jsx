import userSlice, {
  fetchUserLogin,
  fetchUserError,
  fetchUserSuccess,
  fetchUserLogout,
  userRefresh,
} from "../slices/userSlice";
import { loginApi } from "../../service/UserServices";
import { useDispatch } from "react-redux";

export const handleLoginRedux = (email, password) => {
  return async (dispatch) => {
    dispatch(fetchUserLogin());

    try {
      let res = await loginApi(email.trim(), password);
      if (res && res.token) {
        dispatch(fetchUserSuccess({ email: email.trim(), token: res.token }));
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", email);
      } else {
        if (res && res.status === 400) {
          alert(res.data.error);
        } else {
          alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        }
        dispatch(fetchUserError());
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
      dispatch(fetchUserError());
    }
  };
};

export const handleLogoutRedux = () => {
  return (dispatch) => {
    dispatch(fetchUserLogout());
  };
};

export const handleRefresh = () => {
  return (dispatch) => {
    dispatch(userRefresh());
  };
};

export default userSlice.reducer;
