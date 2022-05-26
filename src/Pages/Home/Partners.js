import React from "react";
import company1 from "../../images/banner/company1.jpg";
import company2 from "../../images/banner/company2.png";
import company3 from "../../images/banner/company3.png";
import company4 from "../../images/banner/company4.png";

const Partners = () => {
  return (
    <div className="mb-12">
      <h1 className="text-5xl font-medium text-center text-primary my-12">
        Our Partners
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={company1} alt="Shoes" />
          </figure>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="bg-gray-400" src={company2} alt="Shoes" />
          </figure>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={company3} alt="Shoes" />
          </figure>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={company4} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Partners;
