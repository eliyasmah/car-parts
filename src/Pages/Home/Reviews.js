import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://arcane-gorge-79649.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-medium text-center text-primary my-12">
        Reviews
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {reviews.map((user) => (
          <Review key={user._id} user={user}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
