import React from "react";
import { footer } from "../assets";
import Slider from "./Slider";
import { Link } from "react-router-dom";
// import { productPage } from "../constants";

const PageContents = ({ productPage }) => {
  const homePage = productPage.slice(0, 8);

  function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <>
      <Slider />
      <h1 className="font-bold text-[25px] text-[red] uppercase mt-[10px] pl-[10%] 2xl:pl-[19%]">
        Best seller
      </h1>
      <div className="flex-wrap flex justify-center 2xl:max-w-[60%] lg:max-w-[90%] xl:max-w-[75%] lg:mx-auto">
        {homePage.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="lg:max-w-[25%] md:max-w-[33%] sm:max-w-[33%]"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="h-[300px] cursor-pointer transition-transform transform-gpu group-hover:scale-110 duration-450"
              />
            </div>
            <div className="text-center ">
              <h1 className="text-[#282828] text-[20px] font-bold ">
                {item.title}
              </h1>
              <p className="text-[chocolate] text-[20px] font-bold mt-[5px] ">
                {formatCurrency(item.price)}đ
              </p>
            </div>
          </Link>
        ))}
        <img src={footer} alt="" className="w-[100%] py-[20px]" />
      </div>
    </>
  );
};

export default PageContents;
