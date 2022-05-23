import React from "react";
import banner from "../../images/banner/banner.webp";

const Banner = () => {
  return (
    <div class="card h-[80vh] bg-base-100 shadow-xl image-full my-8">
      <figure>
        <img src={banner} alt="Shoes" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-xl md:text-2xl uppercase">
          New Technology & build
        </h2>
        <p className="md:text-5xl text-4xl lg:text-7xl w-bold">
          ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE
        </p>
      </div>
    </div>
  );
};

export default Banner;
