import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/",
});

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      // Lỗi từ phía server (status code không phải 2xx)
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      // Không có phản hồi từ server
      console.error("No response received from server");
    } else {
      // Lỗi khi thiết lập request (ví dụ: không có kết nối internet)
      console.error("Request failed:", error.message);
    }
    // return Promise.reject(error);
  }
);

export default instance;
