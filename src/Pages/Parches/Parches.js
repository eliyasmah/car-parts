import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const Parches = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const [product, setProduct] = useState({});

  const handleOrder = (event) => {
    event.preventDefault();
    // const slot = event.target.slot.value;
  };

  let { _id, img, name, price, quantity, description, order } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src={img} alt="" />
              <div>
                <h1 class="text-3xl font-bold">{name}</h1>
                <h2>Price: {price} par pice</h2>
                <h2>Available Quantity: {quantity}</h2>
                <h2>Minimum Order: {order}</h2>
                <p class="py-6">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOrder} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                disabled
                value={user?.displayName || ""}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                disabled
                value={user?.email || ""}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Order</span>
              </label>
              <input
                type="number"
                placeholder="order"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parches;
