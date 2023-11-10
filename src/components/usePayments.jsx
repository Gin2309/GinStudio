import React, { useState } from "react";

function usePayments(initialCart) {
  const [cart, setCart] = useState(initialCart);
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return {
    cart,
    inputValue,
    handleChange,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    calculateTotal,
    formatCurrency,
  };
}

export default usePayments;
