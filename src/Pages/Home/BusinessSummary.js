import React from "react";
import logo1 from "../../images/banner/download1.jpg";
import logo2 from "../../images/banner/logo2.png";
import logo3 from "../../images/banner/logo3.png";
import logo4 from "../../images/banner/logo4.jpg";

const BusinessSummary = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium text-center text-primary my-12">
        Business Summary
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={logo1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <p className="text-2xl text-blue-500 font-bold">
              55+ World Wide Customers
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={logo2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <p className="text-2xl text-blue-500 font-bold">
              50+ Customers Reviews
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={logo3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <p className="text-2xl text-blue-500 font-bold">
              300+ Happy Clients
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={logo4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <p className="text-2xl text-blue-500 font-bold">
              5 M+ Annual revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
