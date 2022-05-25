import React from "react";
import customer1 from "../../images/banner/customer1.webp";
import customer2 from "../../images/banner/customer2.webp";
import customer3 from "../../images/banner/customer3.jpg";

const BestCustomers = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium text-center text-primary my-12">
        Our Top Customers
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={customer1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary font-bold text-2xl">
              Foridul Hasan
            </h2>
            <h3>Address: Mripur, Dhaka-1216, Bangladesh</h3>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={customer2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center ">
            <h2 class="card-title text-primary font-bold text-2xl">
              Matthew Blake
            </h2>
            <h3>Address: 49-Anderson St. National City, CA-91950</h3>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={customer3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary font-bold text-2xl">
              Joharlal Kumar
            </h2>
            <h3>Address: 340-gopal road, Old Kolkata, India</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCustomers;
