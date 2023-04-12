import { CustomCard } from "../../custom";

import cartStyle from "../Cart_Style.module.css";
import cartListContentStyle from "./CartListContent_Style.module.css";
const CartListContent = (props) => {
  console.log(props.price);

  const price = `${props.price.toFixed(2)}`;
  return (
    <CustomCard classes={cartListContentStyle["cart-content"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={cartListContentStyle.summary}>
          <span className={cartListContentStyle.price}>{price}</span>
          <span className={cartListContentStyle.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={cartListContentStyle.actions}>
        <button
          className={cartListContentStyle["button"]}
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className={cartListContentStyle["button"]}
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </CustomCard>
  );
};

export default CartListContent;
