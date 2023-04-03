import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// globaly availabe throught src folder
// Components
export {
  Card,
  CustomButton,
  CustomDropDown,
  DateComponent,
  KPIcards,
} from "./components/common";
// Constants
export { COLOR, ICONS, IMG, ROUTES } from "./constants";

// Pages
export {
  DashboardPage,
  ExpensePage,
  LoginPage,
  SigninPage,
  AuthPage,
  LogoutPage,
} from "./pages";

// Styles
export {
  authPageStyle,
  componentStyle,
  expensePageStyle,
  moduleStyles,
} from "./styles";
