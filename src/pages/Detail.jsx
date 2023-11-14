import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { shirt1_1 } from "../assets";
import { useParams } from "react-router-dom";
import { usePayments } from "../components";

function Detail({ productPage }) {
  const { formatCurrency } = usePayments();

  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const { img, title, price } = productPage.find(
    (item) => item.id === parseInt(id)
  );

  let product = [];
  product.push(img);
  product.push(shirt1_1);

  const productArray = product.map((img, index) => ({
    id: index + 1,
    img: img,
  }));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //------------
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  //-------------

  const [count, setCount] = useState(1);

  const increaseClick = () => {
    setCount(count + 1);
  };

  const decreaseClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [currentImage, setCurrentImage] = useState(productArray[0]);

  const changeImage = (productArray) => {
    setCurrentImage(productArray);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="flex ml-[25px] text-[19px] mt-[46px]">
        <Link to="/">Home</Link>
        <Link to="/product" className="ml-[20px]">
          Top
        </Link>
        <Link to="/product/detail" className="font-bold ml-[20px]">
          {title}
        </Link>
      </div>
      <div className="mb-[50px] flex">
        <div className="w-[70%] justify-center flex">
          <div className="pt-[60px]">
            {productArray.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt={`Image ${image.id}`}
                onClick={() => changeImage(image)}
                className="h-[200px] cursor-pointer "
              />
            ))}
          </div>
          <div>
            <img
              src={currentImage.img}
              alt={`Image ${currentImage.id}`}
              className="h-[600px] pl-[50px]"
            />
          </div>
        </div>

        <div className="w-[30%] ">
          <div className="font-bold border-b border-gray-300 pb-[10px]">
            <h1 className="text-[24px] mb-[15px]">{title}</h1>
            <span className="text-[chocolate] text-[18px] ">
              {formatCurrency(price)} VNĐ
            </span>
          </div>
          <p className="mt-[20px] mb-[10px]">Size</p>
          <div>
            <button className="w-[30px] h-[30px] text-center border-solid border-[1px] border-[#ccc] font-bold">
              M
            </button>
            <button className="w-[30px] h-[30px] text-center border-solid border-[1px] border-[#ccc] mx-[5px] font-bold">
              L
            </button>
            <button className="w-[30px] h-[30px] text-center border-solid border-[1px] border-[#ccc] font-bold">
              XL
            </button>
          </div>
          <p className="mt-[20px] mb-[10px]">Quantity</p>
          <div>
            <button
              className="text-[white] bg-[black] w-[30px] h-[30px]"
              onClick={decreaseClick}
            >
              -
            </button>
            <input
              type="text"
              className="w-[30px] h-[30px] text-center border-solid border-[1px] border-[#ccc] mx-[5px]"
              value={count}
              readOnly
              onChange={handleChange}
            />
            <button
              className="text-[white] bg-[black] w-[30px] h-[30px]"
              onClick={increaseClick}
            >
              +
            </button>
          </div>
          <Link
            to="/checkout"
            className="bg-black text-white font-bold my-[30px] w-[200px] h-9 inline-block text-center leading-9"
          >
            Add to cart
          </Link>
          <div>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Thông tin chi tiết
              <FontAwesomeIcon
                icon={faSortDown}
                className="pl-[10px] pb-[3px]"
                style={{ color: "#000" }}
              />
            </button>
            {isOpen && (
              <div className="text-[14px]">
                <p>✦ Chất liệu: Cotton cá sấu.</p>
                <p>✦ Fitting: Oversized fit.</p>
                <p>
                  ✦ Hướng dẫn bảo quản: <br />
                  + Sản phẩm bền nhất khi giặt tay. <br />
                  + Nếu giặt máy, hãy giặt ở nhiệt độ thường. <br />
                  + Khi phơi tránh ánh nắng trực tiếp. <br />+ Nên treo sản phẩm
                  để sản phẩm có độ bền phom dáng.
                </p>
              </div>
            )}
          </div>
          <div>
            <button onClick={toggleDropdown1} className="dropdown-btn">
              Chính sách bảo hành
              <FontAwesomeIcon
                icon={faSortDown}
                className="pl-[10px] pb-[3px]"
                style={{ color: "#000" }}
              />
            </button>
            {isOpen1 && (
              <div className="text-[14px]">
                <p>
                  ✦ Đối với sản phẩm bị lỗi các chi tiết trên áo khi chưa can
                  thiệp sử dụng hay giặt tẩy, Gin Studio sẽ tiến hành kiểm tra
                  và và đổi mới sản phẩm.
                </p>
                <p>
                  ✦ Đối với sản phẩm bị lỗi do quá trình vận chuyển, Gin Studio
                  sẽ khắc phục tuỳ tình trạng hoặc đổi mới.
                </p>
              </div>
            )}
          </div>
          <div>
            <button onClick={toggleDropdown2} className="dropdown-btn">
              Chính sách đổi trả
              <FontAwesomeIcon
                icon={faSortDown}
                className="pl-[10px] pb-[3px]"
                style={{ color: "#000" }}
              />
            </button>
            {isOpen2 && (
              <div className="text-[14px]">
                <p>
                  ✦ Đổi hàng trong vòng 3 ngày với đơn nội thành; 7 ngày với đơn
                  COD (sản phẩm chưa qua sử dụng và còn nguyên tag; mác).
                </p>
                <p>
                  ✦ Sản phẩm muốn đổi có giá trị bằng hoặc cao hơn sản phẩm cũ
                  (quý khách vui lòng thanh toán phí ship hai chiều).
                </p>
                <p>✦ Không áp dụng đổi trả với các sản phẩm sale.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
