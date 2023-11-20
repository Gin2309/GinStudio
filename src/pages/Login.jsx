import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../service/UserServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { handleLoginRedux } from "../redux/action/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadApi, setLoadApi] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email/Password is required");
      return;
    }

    try {
      setLoadApi(true);
      let res = await loginApi(email, password);
      if (res && res.token) {
        dispatch(handleLoginRedux(email, password));
        navigate("/");
      } else {
        if (res && res.status === 400) {
          // Hiển thị cảnh báo từ phản hồi nếu có
          alert(res.data.error);
        } else {
          // Hiển thị cảnh báo mặc định nếu không có phản hồi hoặc không có thông tin cụ thể
          alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        }
      }
    } catch (error) {
      // Xử lý lỗi từ phía client
      console.error("Lỗi khi đăng nhập:", error);
      alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
    setLoadApi(false);
  };

  return (
    <>
      <div className="py-[100px]">
        <div className="bg-[#EBEBEB] text-[#212428] rounded-md w-[25%] mx-[auto]">
          <form action="" className=" p-[20px]">
            <div className="flex flex-col ">
              <h1 className="m-[5px]">eve.holt@reqres.in</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-[8px] rounded-md hover:shadow-lg "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-[8px] rounded-md hover:shadow-lg my-[25px]"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <Link
                to="/register"
                className="hover:bg-[#62FF86] hover:border-[#212428] hover:border-[2px] border-[2px] border-[#EBEBEB] text-center py-[4px] px-[8px] font-bold"
              >
                I don't have a HackerNoon account yet
              </Link>
              <Link
                // disabled={loadApi}
                onClick={() => handleLogin()}
                className="text-[#00FF00] bg-[#3C3C3B] text-center py-[8px] px-[30px] rounded-md mt-[15px] font-bold"
              >
                {loadApi && (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin-pulse fa-spin-reverse"
                  />
                )}{" "}
                LOG ME IN
              </Link>
              {error && (
                <div className="text-[red] mb-[10px] text-[13px]">{error}</div>
              )}
              <Link className=" hover:bg-[#62FF86] hover:border-[#212428] hover:border-[2px] uppercase text-center border-[2px] border-[#EBEBEB] font-bold">
                forgot your password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
