import { checkOutCart } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import usePayments from "../components/usePayments";

function Checkout() {
  const checkOutPage = checkOutCart;
  const {
    cart,
    handleChange,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    calculateTotal,
    formatCurrency,
  } = usePayments(checkOutPage);

  return (
    <>
      <div className="flex justify-center mt-[46px]">
        <div className="w-[60%] 2xl:w-[50%] xl:w-[55%]">
          <h1 className="text-[25px] font-bold py-[20px]">Giỏ hàng của bạn</h1>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex ">
                <div className="flex w-[60%]">
                  <div className="w-[112px] mr-[15px] block justify-center">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h1 className="font-bold text-[20px]">{item.title}</h1>
                    <p>{item.size}</p>
                    <h2 className="text-[chocolate] mt-[10px] font-bold text-[20px] ">
                      {formatCurrency(item.price)}đ
                    </h2>
                  </div>
                </div>
                <div className="flex  float-right pl-[10%] items-center">
                  <div className="flex">
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
                      readOnly
                    />
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-[white] bg-[black] w-[30px] h-[30px]"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-[chocolate] font-bold text-[20px] px-[15px] ">
                    {formatCurrency(item.quantity * item.price)}đ
                  </div>
                  <div className="bg-[black] w-[30px] h-[30px] text-center leading-[30px] cursor-pointer">
                    <FontAwesomeIcon
                      onClick={() => removeItem(item.id)}
                      icon={faTrash}
                      style={{ color: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col float-right pb-[30px]">
              <h1 className="text-[23px] font-bold pb-[10px]">
                Tổng tiền:{" "}
                <span className="text-[chocolate]">
                  {formatCurrency(calculateTotal())}đ
                </span>
              </h1>
              <button className="text-[white] bg-[black] py-[10px] font-bold">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
