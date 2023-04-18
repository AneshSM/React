import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDeetailPage from "../pages/ProductDeetailPage";
import ErrorPage from "../pages/ErrorPage";
import RootPage from "../pages/RootPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductDeetailPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
