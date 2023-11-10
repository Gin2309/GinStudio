import React from "react";
import { productPage } from "../constants";
import { Link } from "react-router-dom";

function Product() {
  function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      <div className="flex ml-[25px] text-[19px]  fixed">
        <Link to="/">Home</Link>
        <Link to="/product" className="font-bold ml-[20px]">
          Top
        </Link>
      </div>
      <div className="flex mt-[40px]">
        <div className="w-[25%] fixed mt-[40px]">
          <ul className="text-[18px] ml-[25px]">
            <h1 className="font-bold text-[20px] border-b border-gray-300">
              Filter
            </h1>
            <li className="mb-[15px] mt-[10px]">T-Shirt</li>
            <li className="mb-[15px]">Polo</li>
            <li className="mb-[15px]">Sweaters</li>
            <li className="mb-[15px]">Hoodies</li>
            <li className="mb-[15px]">Jacket</li>
          </ul>
          <ul className="text-[18px] ml-[25px]">
            <h1 className="font-bold text-[20px] border-b border-gray-300">
              Price
            </h1>
            <li className="mb-[15px] mt-[10px]">
              <input type="checkbox" className="mr-[10px] " />
              300.000đ - 400.000đ
            </li>
            <li className="mb-[15px]">
              <input type="checkbox" className="mr-[10px]" />
              400.000đ - 700.000đ
            </li>
            <li className="mb-[15px]">
              <input type="checkbox" className="mr-[10px]" />
              700.000đ - 1.000.000đ
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-[75%] mb-[40px] ml-[25%]">
          {productPage.map((item) => (
            <div key={item.id} className="max-w-[25%] group">
              <Link to="/product/detail" className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="h-[300px] cursor-pointer xl:mx-[15px] transition-transform transform-gpu group-hover:scale-110 duration-450 "
                />
              </Link>
              <div className="text-center">
                <h1 className="text-[#282828] text-[20px] font-bold">
                  {item.title}
                </h1>
                <p className="text-[chocolate] text-[20px] font-bold mt-[5px] ">
                  {formatCurrency(item.price)}đ
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
