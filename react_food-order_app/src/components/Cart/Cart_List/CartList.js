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

  const cartItemAddHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHmadler = (id) => {
    cartCTX.removeItem(id);
  };
  const Items = cartCTX.items.map((item) => {
    return (
      <CartListContent
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        src={item.img}
        onRemove={cartItemRemoveHmadler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });
  return (
    <PopUpModule onClose={props.onHideCart}>
      <CustomCard classes={cartStyle["cart-list-container"]}>
        <main className={cartStyle["cart-list-content"]}>
          {Items.length > 0 ? Items : <p>Cart is Empty</p>}
        </main>
        <footer className={cartStyle["footer"]}>
          <div className={cartStyle["cart-total-price"]}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={cartStyle["cart-action-buttons"]}>
            <FoodActionButton
              varient={cartStyle["cart-button"]}
              onAtcionBtnClick={props.onHideCart}
              type={"altButton"}
            >
              Close
            </FoodActionButton>
            {hasItems && (
              <FoodActionButton varient={cartStyle["cart-button"]}>
                Order
              </FoodActionButton>
            )}
          </div>
        </footer>
      </CustomCard>
    </PopUpModule>
  );
};

export default CartList;
