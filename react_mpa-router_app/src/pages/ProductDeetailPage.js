import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDeetailPage = () => {
  const param = useParams();
  return (
    <>
      <div>ProductDeetailPage</div>
      <p>{param.productId}</p>
      <Link to={".."} relative="path">
        Go back
      </Link>
    </>
  );
};

export default ProductDeetailPage;
