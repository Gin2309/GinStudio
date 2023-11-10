import React from "react";
import Cart from "./Cart";

const OpenCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      {/* Biểu tượng mở giỏ hàng */}
      <button onClick={toggleCart}>🛒</button>

      {/* Component Giỏ hàng */}
      <Cart isOpen={isCartOpen} onClose={toggleCart} />

      {/* Các nội dung khác của ứng dụng */}
    </div>
  );
};

export default OpenCart;
