// import axios from "axios";
import axios from "./custom-axios";

const fetchAllUser = () => {
  return axios.get();
};

const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export { fetchAllUser, loginApi };
