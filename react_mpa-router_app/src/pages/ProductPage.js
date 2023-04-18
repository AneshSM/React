import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: "p1", product: "Product 1" },
  { id: "p2", product: "Product 2" },
  { id: "p3", product: "Product 3" },
];

const ProductPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.id}>{item.product}</Link>
            </li>
          );
        })}
      </ul>
      <p>
        go to Home,<Link to="..">click here.</Link>
      </p>
    </>
  );
};

export default ProductPage;
