import React from "react";

const BusinessSummary = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium text-center text-primary my-12">
        Business Summary
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title p-12">icon</h2>
            <p className="text-2xl text-blue-500 font-bold">
              55+ World Wide Customers
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title p-12">icon</h2>
            <p className="text-2xl text-blue-500 font-bold">
              50+ Customers Reviews
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title p-12">icon</h2>
            <p className="text-2xl text-blue-500 font-bold">
              300+ Happy Clients
            </p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title p-12">icon</h2>
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
