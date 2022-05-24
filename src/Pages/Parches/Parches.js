import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const Parches = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  let { _id, img, name, price, quantity, description } = product;
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
                <h2>Minimum Order: </h2>
                <p class="py-6">{description}</p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parches;
