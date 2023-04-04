import React, { useContext, useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import { Card } from "../components/common";
import LogoutPage from "./LogoutPage";
import { authPageStyle, componentStyle } from "../styles";
import { AuthContext } from "../auth";

const AuthPage = () => {
  const context = useContext(AuthContext);
  return (
    <Card
      className={`${componentStyle.column_container} ${authPageStyle["auth-container"]}`}
    >
      {context.authState ? <LogoutPage /> : <LoginPage />}
    </Card>
  );
};

export default AuthPage;
