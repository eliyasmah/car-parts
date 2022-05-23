import React from "react";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Product = ({ product }) => {
  const { name, price, img, quantity, description } = product;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2>Price: {price} par pice</h2>
        <h3>Available Quantity:{quantity}</h3>
        <h3>Minimum Order:</h3>
        <p>{description}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
          <ButtonPrimary>buy now</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Product;
