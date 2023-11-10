import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { styles } from "./styles";
import { Cart, Footer } from "./components";
import { ginlogo2 } from "./assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Root = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} bg-[#ece9e7] h-[46px] z-10 w-full fixed top-0 `}
      >
        <img
          src={ginlogo2}
          alt=""
          className="h-[35px] leading-[46px] absolute left-5 "
        />
        <nav>
          <ul className="text-black lg:text-[17px] md:text-[15px] font-bold uppercase flex leading-[46px] ">
            <Link
              to="/"
              className="lg:px-[24px] md:px-[5px] hover:bg-gray-300 inline-block"
            >
              HOME
            </Link>
            <div className="relative group">
              <Link
                to="/product"
                className="px-[24px] hover:bg-gray-300 inline-block"
              >
                TOP
              </Link>
              <div className="absolute hidden group-hover:block left-0 pt-[8px] w-48 bg-white shadow-md rounded-xs font-normal">
                <ul>
                  <Link
                    to="/product/detail"
                    className="block hover:bg-gray-300"
                  >
                    <span className="pl-[20px]"></span>
                    Tshirt
                  </Link>
                  <li className="block hover:bg-gray-300 ">
                    <span className="pl-[20px]"></span>polo
                  </li>
                  <li className="block hover:bg-gray-300 ">
                    <span className="pl-[20px]"></span>vest
                  </li>
                  <li className="block hover:bg-gray-300 ">
                    <span className="pl-[20px]"></span>jacket
                  </li>
                </ul>
              </div>
            </div>
            <li className="px-[24px] ">BOTTOM</li>
            <li className="px-[24px]">SALE</li>
            <li className="px-[24px]">ACCESSORIES</li>
            <li className="px-[24px]">ABOUT US</li>
          </ul>
        </nav>
        <div className="right-[20px] absolute flex">
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={toggleCart}
              className="cursor-pointer"
            />
            <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
          </div>
          <Link to="/register">
            <FontAwesomeIcon
              icon={faUser}
              className="lg:px-[20px] md:px-[7px]"
            />
          </Link>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Root;
