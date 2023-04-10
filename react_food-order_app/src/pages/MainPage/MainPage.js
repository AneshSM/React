import React, { useState } from "react";
import { AppHeader, AppMain } from "../../layouts";
import { CartList } from "../../components/Cart";

const MainPage = () => {
  const [cartStatus, setCartState] = useState(false);
  const showCartHandler = () => {
    setCartState(true);
  };
  const hideCartHandler = () => {
    setCartState(false);
  };
  return (
    <>
      {cartStatus && <CartList onHideCart={hideCartHandler} />}
      <AppHeader onShowCart={showCartHandler} />
      <AppMain />
    </>
  );
};

export default MainPage;
