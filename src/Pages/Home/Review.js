import React from "react";

const Review = ({ user }) => {
  const { name, review, ratings } = user;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary font-bold text-2xl">{name}</h2>
        <p className="text-secondary">{review}</p>
        <div class="card-actions">
          <p className="text-white px-16 bg-red-400 text py-2 rounded">
            Ratings: {ratings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
