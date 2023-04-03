import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import { Card } from "../components/common";
import LogoutPage from "./LogoutPage";
import { authPageStyle, componentStyle } from "../styles";

const AuthPage = () => {
  const [authState, setAuthState] = useState(false);
  const onLogin = (data) => {
    setAuthState(true);
    localStorage.setItem("data", "1");
    console.log(data);
  };
  const onLogout = () => {
    localStorage.clear("data");
    setAuthState(false);
  };
  useEffect(() => {
    if (localStorage.getItem("data") === "1") {
      setAuthState(true);
    }
  }, []);
  return (
    <Card
      className={`${componentStyle.column_container} ${authPageStyle["auth-container"]}`}
    >
      {authState ? (
        <LogoutPage onClick={onLogout} />
      ) : (
        <LoginPage onLogin={onLogin} />
      )}
    </Card>
  );
};

export default AuthPage;
