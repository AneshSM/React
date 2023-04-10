import React, { useContext } from "react";
import { CustomCard } from "../../custom";

import cartStyle from "../Cart_Style.module.css";
import CartListContent from "../Cart_ListContent/CartListContent";
import { FoodActionButton } from "../../page";
import { PopUpModule } from "../../../module";
import CartContext from "../../../context/cart-context";

const CartList = (props) => {
  const cartCTX = useContext(CartContext);
  const totalAmount = `${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHmadler = (id) => {};
  return (
    <PopUpModule onClose={props.onHideCart}>
      <CustomCard classes={cartStyle["cart-list-container"]}>
        <main className={cartStyle["cart-list-content"]}>
          {cartCTX.items.map((item) => {
            return (
              <CartListContent
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHmadler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            );
          })}
        </main>
        <footer className={cartStyle["footer"]}>
          <div className={cartStyle["cart-total-price"]}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={cartStyle["cart-action-buttons"]}>
            <FoodActionButton
              onAtcionBtnClick={props.onHideCart}
              type={"altButton"}
            >
              Close
            </FoodActionButton>
            {hasItems && <FoodActionButton>Order</FoodActionButton>}
          </div>
        </footer>
      </CustomCard>
    </PopUpModule>
  );
};

export default CartList;
