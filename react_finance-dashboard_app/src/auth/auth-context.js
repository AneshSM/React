import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  authState: false,
  onLogout: () => {},
  onLogin: (data) => {},
});
export const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("data") === "1") {
      setAuthState(true);
    }
  }, []);

  const onLogin = (data) => {
    setAuthState(true);
    localStorage.setItem("data", "1");
  };

  const onLogout = () => {
    localStorage.clear("data");
    setAuthState(false);
  };

  return (
    <AuthContext.Provider
      value={{ authState: authState, onLogout: onLogout, onLogin: onLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
