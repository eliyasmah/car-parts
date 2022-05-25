import React from "react";

const Review = ({ user }) => {
  const { name, review, img } = user;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-24  rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary font-bold text-2xl">{name}</h2>
        <p className="text-secondary">{review}</p>
      </div>
    </div>
  );
};

export default Review;
