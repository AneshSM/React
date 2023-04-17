import { uiActions } from "./ui-slice";

import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-food-order-app-4a405-default-rtdb.asia-southeast1.firebasedatabase.app/reduxCart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotificaion({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificaion({
        status: "pending",
        title: "Sending...",
        message: "Sending cart",
      })
    );
    const sendCart = async () => {
      const response = await fetch(
        "https://react-food-order-app-4a405-default-rtdb.asia-southeast1.firebasedatabase.app/reduxCart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) throw new Error("Sending cart datat failed!");
    };

    try {
      await sendCart();
      dispatch(
        uiActions.showNotificaion({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      sendCart().catch((error) => {
        dispatch(
          uiActions.showNotificaion({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      });
    }

    dispatch(
      uiActions.showNotificaion({
        status: "success",
        title: "Success",
        message: "Sent cart data successfully!",
      })
    );
  };
};
