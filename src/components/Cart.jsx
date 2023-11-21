import React from "react";
import { checkOutCart } from "../constants";
import { Link } from "react-router-dom";
import usePayments from "./usePayments";

function Cart({ isOpen, toggleCart }) {
  const cartComponent = checkOutCart;
  const {
    cart,
    handleChange,
    increaseQuantity,
    decreaseQuantity,
    calculateTotal,
    formatCurrency,
  } = usePayments(cartComponent);

  return (
    <div
      className={`bg-white top-[35px] right-0 w-[530px]  absolute shadow-2xl 
       ${isOpen ? "" : "hidden"}`}
    >
      <h1 className="text-[23px] font-bold pb-[20px] pl-[20px] ">
        Giỏ hàng của bạn
      </h1>
      <ul className="pl-[20px]">
        {cart.map((item) => (
          <div key={item.id} className="flex ">
            <div className="flex w-[60%]">
              <div className="w-[100px] mr-[15px] block justify-center">
                <img src={item.img} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[18px] pt-[15px]">
                  {item.title}
                </h1>
                <p>{item.size}</p>
                <h2 className="text-[chocolate] mt-[10px] font-bold text-[18px] ">
                  {formatCurrency(item.price)}đ
                </h2>
              </div>
            </div>
            <div className="flex  float-right pl-[10%] items-center">
              <div className="flex ">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-[white] bg-[black] w-[30px] h-[30px]"
                >
                  -
                </button>
                <input
                  className="w-[30px] h-[30px] text-center border-solid border-[1px] border-[#ccc] mx-[5px]"
                  type="text"
                  value={item.quantity}
                  onChange={handleChange}
                />
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-[white] bg-[black] w-[30px] h-[30px]"
                >
                  +
                </button>
              </div>
              <div className="text-[chocolate] font-bold text-[18px] px-[15px] ">
                {formatCurrency(item.quantity * item.price)}đ
              </div>
            </div>
          </div>
        ))}
      </ul>
      <p className="text-[20px] font-bold pb-[10px] pl-[20px]">
        Tổng tiền:{" "}
        <span className="text-[chocolate]">
          {formatCurrency(calculateTotal())}đ
        </span>
      </p>
      <Link to="/checkout">
        <div
          className={`text-[white] bg-[black] text-center py-[10px] uppercase font-bold `}
          onClick={toggleCart}
        >
          Go to cart
        </div>
      </Link>
    </div>
  );
}

export default Cart;
