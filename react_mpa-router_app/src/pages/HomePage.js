import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        go to Products,<Link to="products">click here.</Link>
      </p>
    </>
  );
};

export default HomePage;
