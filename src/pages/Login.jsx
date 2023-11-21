import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { handleLoginRedux } from "../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((state) => state.isLoading);
  const account = useSelector((state) => state.account);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email/Password is required");
      return;
    }

    dispatch(handleLoginRedux(email, password));
  };

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);

  return (
    <>
      <div className="py-[200px]">
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
                className="p-[8px] rounded-md hover:shadow-lg mt-[25px] mb-[5px]"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && (
                <div className="text-[red] mb-[10px] text-[14px]">{error}</div>
              )}
            </div>
            <div className="flex flex-col">
              <Link
                to="/register"
                className=" hover:text-[chocolate]  text-center py-[4px] px-[8px] font-bold"
              >
                I don't have an account yet
              </Link>
              <Link
                onClick={() => handleLogin()}
                className="text-[white] bg-[#3C3C3B] text-center py-[8px] px-[30px] rounded-md mt-[15px] font-bold"
              >
                {isLoading && (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin-pulse "
                  />
                )}{" "}
                LOG ME IN
              </Link>

              <Link className="uppercase text-center mt-[10px] font-bold">
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
