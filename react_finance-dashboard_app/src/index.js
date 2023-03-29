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

export { DashboardPage, ExpensePage } from "./pages";
export { COLOR, IMG, ROUTES, ICONS } from "./constants";
export {
  Card,
  CustomButton,
  CustomInput,
  CustomDropDown,
  DateComponent,
  KPIcards,
} from "./components/common";
export { expenseInput } from "./hooks";
export { ICNcontainer } from "./components/container";
