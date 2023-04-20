import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedExpiration = localStorage.getItem("expiration");

  const expirationDate = new Date(storedExpiration);
  const now = new Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  console.log(tokenDuration);

  if (tokenDuration < 0) return "EXPIRED";
  return token;
};

export const logoutAction = () => {
  localStorage.clear();
  return redirect("/");
};

// auth for compnents

export const tokenLoader = () => {
  return getToken();
};

// auth from route

export const getAuth = () => {
  const token = getToken();

  if (!token) return redirect("/auth");

  return null;
};
