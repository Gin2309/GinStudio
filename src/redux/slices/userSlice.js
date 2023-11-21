import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    account: { email: "", auth: false, token: "" },
    isLoading: false,
    isError: false,
  },
  reducers: {
    fetchUserLogin: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    fetchUserError: (state) => {
      state.account.auth = false;
      state.isLoading = false;
      state.isError = true;
    },
    fetchUserSuccess: (state, action) => {
      state.account = {
        email: action.payload.email,
        token: action.payload.token,
        auth: true,
      };
      state.isLoading = false;
      state.isError = false;
    },
    fetchUserLogout: (state) => {
      state.account = {
        email: "",
        token: "",
        auth: false,
      };
      localStorage.removeItem("token");
    },
  },
});

export const {
  fetchUserLogin,
  fetchUserError,
  fetchUserSuccess,
  fetchUserLogout,
} = userSlice.actions;

export default userSlice.reducer;
