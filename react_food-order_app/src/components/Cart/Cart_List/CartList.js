import React, { useContext, useState } from "react";
import { CustomCard } from "../../custom";

import cartStyle from "../Cart_Style.module.css";
import CartListContent from "../Cart_ListContent/CartListContent";
import { FoodActionButton } from "../../page";
import { PopUpModule } from "../../../module";
import CartContext from "../../../context/cart-context";
import { CartCheckout } from "..";

const CartList = (props) => {
  const cartCTX = useContext(CartContext);

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const orderHandler = () => {
    setIsChecked(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-food-order-app-4a405-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCTX.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCTX.clearCart();
  };

  const modalAction = (
    <div className={cartStyle["cart-action-buttons"]}>
      <FoodActionButton
        varient={cartStyle["cart-button"]}
        onAtcionBtnClick={props.onHideCart}
        type={"altButton"}
      >
        Close
      </FoodActionButton>
      {hasItems && (
        <FoodActionButton
          varient={cartStyle["cart-button"]}
          onAtcionBtnClick={orderHandler}
        >
          Order
        </FoodActionButton>
      )}
    </div>
  );
  const CartContent = (
    <>
      <main className={cartStyle["cart-list-content"]}>
        {Items.length > 0 ? Items : <p>Cart is Empty</p>}
      </main>
      <footer className={cartStyle["footer"]}>
        <div className={cartStyle["cart-total-price"]}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isChecked ? (
          <CartCheckout
            onCancel={() => {
              setIsChecked(false);
            }}
            onConfirm={submitOrderHandler}
          />
        ) : (
          modalAction
        )}
      </footer>
    </>
  );

  const sendinProgress = <p>Sending Order data...</p>;

  const orderStatus = (
    <>
      <p>Successfully sent order!</p>
      <div className={cartStyle["cart-action-buttons"]}>
        <FoodActionButton
          varient={cartStyle["cart-button"]}
          onAtcionBtnClick={props.onHideCart}
          type={"altButton"}
        >
          Close
        </FoodActionButton>
      </div>
    </>
  );

  return (
    <PopUpModule onClose={props.onHideCart}>
      <CustomCard classes={cartStyle["cart-list-container"]}>
        {!isSubmitting && didSubmit && orderStatus}
        {!isSubmitting && !didSubmit && CartContent}
        {isSubmitting && sendinProgress}
      </CustomCard>
    </PopUpModule>
  );
};

export default CartList;
