import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useForm } from "react-hook-form";

const Parches = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://arcane-gorge-79649.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const [product, setProduct] = useState({});

  const handleOrder = (event) => {
    const order = event.target.order.value;
    const location = event.target.location.value;
    const userData = {
      name: name,
      userName: user.displayName,
      email: user.email,
      order: order,
      location: location,
    };
    console.log(userData);
    fetch("https://arcane-gorge-79649.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    event.preventDefault();
  };

  let { _id, img, name, price, quantity, description, order } = product;
  useEffect(() => {
    fetch(`https://arcane-gorge-79649.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div class="hero min-h-screen bg-base-200 my-12 rounded">
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
                <span class="label-text">Product Name</span>
              </label>
              <input
                type="text"
                disabled
                value={name || ""}
                class="input input-bordered"
              />
            </div>
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
                name="order"
                placeholder="Order Minimum 100 pice"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Please Enter Your Location"
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
