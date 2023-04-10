import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Pages
export { MainPage } from "./pages";

// -----------Components----------------------

// Custom Components
export { CustomButton, CustomCard, CustomInput } from "./components/custom";

// Cart
export { CartButton, CartList, CartInput } from "./components/Cart";

// Page Components
export {
  FoodActionButton,
  FoodList,
  FoodListContent,
  FoodSummary,
} from "./components/page";

// -------------------- Layout -------------------
export { AppHeader, AppMain } from "./layouts";

// -------------------- Context -------------------
export { default as CartContext } from "./context/cart-context";
export { default as CartProvider } from "./context/CartProvider";

// Module
export { PopUpModule } from "./module";

// Assets
export {
  mealsImage,
  barbecueBurger,
  greenBowl,
  schictzel,
  sushiImg,
} from "./constants/assets";

// Icons
export { CartIcon } from "./constants/Icons";

// Color
export { COLOR } from "./constants/color";
