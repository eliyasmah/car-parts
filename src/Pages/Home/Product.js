import React from "react";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div>
      <p>Name:{name}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
