import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, img, quantity, description } = product;

  const navigate = useNavigate();

  const buyProductHandler = (id) => {
    navigate(`/parches/${_id}`);
  };

  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          className="border-2 border-primary rounded mt-4"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2>Price: {price} par pice</h2>
        <h3>Available Quantity:{quantity}</h3>
        <h3>Minimum Order:</h3>
        <p>{description}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
          <button
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            onClick={() => buyProductHandler(_id)}
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
