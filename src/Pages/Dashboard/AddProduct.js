import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {};
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            Add Product
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs  ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
                {...register("productName", {
                  required: {
                    value: true,
                    message: "Product Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product image</span>
              </label>
              <input
                type="text"
                placeholder="Product image"
                className="input input-bordered w-full max-w-xs"
                {...register("img", {
                  required: {
                    value: true,
                    message: "image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Product Price par pice"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Product Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Available Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Order</span>
              </label>
              <input
                type="number"
                placeholder="Minimum Order"
                className="input input-bordered w-full max-w-xs"
                {...register("order", {
                  required: {
                    value: true,
                    message: "Minimum Order is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                type="text"
                placeholder="Product Description"
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Product Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email address",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* {signInError} */}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
