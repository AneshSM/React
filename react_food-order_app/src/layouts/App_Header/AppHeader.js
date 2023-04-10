import React, { useContext } from "react";

import headerStyle from "./AppHeader_Style.module.css";
import { CartButton } from "../../components/Cart";
const AppHeader = (props) => {
  return (
    <>
      <header className={headerStyle["app-header"]} style={props.style}>
        <div className={headerStyle["header-title"]}>React Meals</div>
        <div className={headerStyle["header-options"]}>
          <CartButton onCartButtonClick={props.onShowCart} />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
