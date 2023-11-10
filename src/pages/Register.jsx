import React from "react";
import { styles } from "../styles";
import { Link, Outlet } from "react-router-dom";
const Register = () => (
  <>
    <div className={`${styles.center} my-[80px]`}>
      <form
        action=""
        className=" max-w-[40%] flex-col justify-start flex border-solid border-2 border-[#ccc]  rounded-md"
      >
        <div className="px-[35px] py-[20px]">
          <h1 className="font-bold text-[27px] mb-[20px]">Đăng ký</h1>
          <label htmlFor="" className="flex-col flex text-[18px]">
            Họ và tên
            <input
              type="text"
              placeholder="Nhập họ và tên của bạn"
              className="bg-[#f1f1f1] p-[10px] mb-[15px]"
            />
          </label>
          <label htmlFor="" className="flex-col flex text-[18px]">
            Email
            <input
              type="text"
              placeholder="Nhập email của bạn"
              className="bg-[#f1f1f1] p-[10px] mb-[15px]"
            />
          </label>
          <label htmlFor="" className="flex-col flex text-[18px]">
            Số điện thoại
            <input
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              className="bg-[#f1f1f1] p-[10px] mb-[15px]"
            />
          </label>
          <label htmlFor="" className="text-[18px] flex flex-col">
            Giới tính
            <div className="flex mb-[15px]">
              <input type="radio" value={1} className="ml-[15px] mr-[5px]" />
              Nam
              <input type="radio" value={0} className="ml-[15px] mr-[5px]" />
              Nữ
            </div>
          </label>
          <label htmlFor="" className="flex-col flex text-[18px]">
            Mật khẩu
            <input
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              className="bg-[#f1f1f1] p-[10px] mb-[15px]"
            />
          </label>
          <label htmlFor="" className="flex-col flex text-[18px]">
            Xác nhận mật khẩu
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="bg-[#f1f1f1] p-[10px] mb-[15px]"
            />
          </label>
          <label htmlFor="" className="flex ">
            <input type="checkbox" className="mr-[10px]" /> {"I accept the "}
            <span className="pr-[5px]"></span>
            <span className="text-[dodgerblue]">
              {"  Terms of Service & Privacy Policy "}
            </span>
          </label>
        </div>
        <Link
          to="/"
          className="text-white bg-black flex justify-center h-[50px] leading-[50px]"
        >
          Đăng ký
        </Link>
        <Outlet />
      </form>
    </div>
  </>
);

export default Register;
