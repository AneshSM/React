import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import cartStyle from "../Cart_Style.module.css";
import { CustomButton } from "../../custom";
import CartContext from "../../../context/cart-context";
const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  const numberOfItems = cartctx.items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);
  return (
    <>
      <CustomButton
        type="submit"
        varient={cartStyle["food-cart-button"]}
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
