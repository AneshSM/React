import React from "react";

//components
import { CustomCard } from "../../custom";
// styles
import cartCheckoutStyle from "./CartCheckout_Style.module.css";

const Checkout = () => {
  return (
    <CustomCard>
      <form>
        <div className={cartCheckoutStyle.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className={cartCheckoutStyle.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>
        <div className={cartCheckoutStyle.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
        <div className={cartCheckoutStyle.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <button>Confirm</button>
      </form>
    </CustomCard>
  );
};

export default Checkout;
