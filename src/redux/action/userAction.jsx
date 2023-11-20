import userSlice, {
  fetchUserLogin,
  fetchUserError,
  fetchUserSuccess,
} from "../reducers/userSlice";
import { loginApi } from "../../service/UserServices";

export const handleLoginRedux = (email, password) => {
  return async (dispatch) => {
    dispatch(fetchUserLogin());

    try {
      let res = await loginApi(email.trim(), password);
      if (res && res.token) {
        dispatch(fetchUserSuccess({ email: email.trim(), token: res.token }));
        localStorage.setItem("token", res.token);
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

export default userSlice.reducer;
