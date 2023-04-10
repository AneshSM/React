import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import cartStyle from "../Cart_Style.module.css";
import { CustomButton } from "../../custom";
import CartContext from "../../../context/cart-context";
const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  const { items } = cartctx;

  const numberOfItems = items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);

  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClass = `${cartStyle["food-cart-button"]} ${
    isHighlighted ? cartStyle.bump : ""
  }`;

  return (
    <>
      <CustomButton
        type="submit"
        varient={buttonClass}
        style={{}}
        onCustomButtonClick={props.onCartButtonClick}
      >
        <div>
          <FaShoppingCart />
          <span>Your Cart</span>
          <div className={cartStyle["food-item-counter"]}>{numberOfItems}</div>
        </div>
      </CustomButton>
    </>
  );
};

export default CartButton;
