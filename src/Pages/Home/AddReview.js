import React from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://arcane-gorge-79649.herokuapp.com/reviews`;
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
  return (
    <div className="w-50 mx-auto my-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            value={user.displayName}
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            class="textarea textarea-info"
            placeholder="Add Review"
            {...register("review", {
              required: {
                value: true,
                message: "review is Required",
              },
            })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            type="text"
            placeholder="Ratings out of 5"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("ratings")}
          />
        </div>
        <input
          className="btn w-full max-w-xs text-white mt-6"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
